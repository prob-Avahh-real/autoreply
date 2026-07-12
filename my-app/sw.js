const CACHE_NAME = 'festival-greetings-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// 需要缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap'
];

// 安装Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: 安装中...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: 缓存静态资源');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: 安装完成');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: 安装失败', error);
      })
  );
});

// 激活Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: 激活中...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: 删除旧缓存', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: 激活完成');
        return self.clients.claim();
      })
      .catch(error => {
        console.error('Service Worker: 激活失败', error);
      })
  );
});

// 拦截网络请求
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 只处理同源请求
  if (url.origin !== location.origin) {
    return;
  }
  
  // 处理导航请求（页面请求）
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request)
        .then(response => {
          return response || fetch(request);
        })
        .catch(() => {
          // 如果网络请求失败，返回缓存的主页
          return caches.match('/');
        })
    );
    return;
  }
  
  // 处理静态资源请求
  if (STATIC_ASSETS.includes(url.pathname) || 
      url.pathname.includes('/icons/') || 
      url.pathname.includes('/screenshots/')) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          return response || fetch(request)
            .then(fetchResponse => {
              // 缓存新的静态资源
              return caches.open(STATIC_CACHE)
                .then(cache => {
                  cache.put(request, fetchResponse.clone());
                  return fetchResponse;
                });
            });
        })
    );
    return;
  }
  
  // 处理API请求（如果有）
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .catch(() => {
          // API请求失败时返回缓存数据或错误信息
          return new Response(JSON.stringify({ error: '网络连接失败' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        })
    );
    return;
  }
  
  // 其他请求：网络优先，失败时使用缓存
  event.respondWith(
    fetch(request)
      .then(response => {
        // 缓存成功的响应
        if (response.status === 200) {
          return caches.open(DYNAMIC_CACHE)
            .then(cache => {
              cache.put(request, response.clone());
              return response;
            });
        }
        return response;
      })
      .catch(() => {
        // 网络失败时尝试缓存
        return caches.match(request);
      })
  );
});

// 处理推送通知
self.addEventListener('push', event => {
  let notificationData = {
    title: '节日祝福助手',
    body: '您有新的节日祝福提醒',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: '查看详情',
        icon: '/icons/icon-96x96.png'
      },
      {
        action: 'close',
        title: '关闭',
        icon: '/icons/icon-96x96.png'
      }
    ]
  };

  // 尝试解析推送数据
  try {
    if (event.data) {
      const data = event.data.json();
      if (data) {
        notificationData = {
          ...notificationData,
          title: data.title || notificationData.title,
          body: data.body || notificationData.body,
          image: data.image || null,
          data: {
            ...notificationData.data,
            ...data.data
          }
        };

        // 根据通知类型添加不同的操作
        if (data.type === 'festival') {
          notificationData.actions = [
            {
              action: 'view',
              title: '查看模板',
              icon: '/icons/icon-72x72.png'
            },
            {
              action: 'share',
              title: '分享',
              icon: '/icons/icon-72x72.png'
            }
          ];
        } else if (data.type === 'recommendation') {
          notificationData.actions = [
            {
              action: 'view',
              title: '查看推荐',
              icon: '/icons/icon-72x72.png'
            },
            {
              action: 'dismiss',
              title: '忽略',
              icon: '/icons/icon-72x72.png'
            }
          ];
        }
      }
    }
  } catch (error) {
    console.error('解析推送数据失败:', error);
  }

  event.waitUntil(
    self.registration.showNotification(notificationData.title, notificationData)
  );
});

// 处理通知点击
self.addEventListener('notificationclick', event => {
  event.notification.close();

  const action = event.action;
  const notificationData = event.notification.data;

  if (action === 'view' || action === 'explore') {
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then(clientList => {
        // 如果已有打开的窗口，聚焦到该窗口
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        // 否则打开新窗口
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
    );
  } else if (action === 'share') {
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then(clientList => {
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            client.postMessage({
              type: 'share_notification',
              data: notificationData
            });
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/?action=share');
        }
      })
    );
  } else if (action === 'dismiss' || action === 'close') {
    // 关闭通知，不做任何操作
    return;
  } else {
    // 默认行为：打开主页
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// 处理消息（来自主线程）
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 后台同步（如果支持）
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // 执行后台同步任务
      console.log('Service Worker: 执行后台同步')
    );
  }
});

// 定期清理缓存
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CACHE_CLEANUP') {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  }
});
