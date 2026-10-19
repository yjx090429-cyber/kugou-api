// 酷狗音乐 API 服务入口
process.env.HOST = process.env.HOST || '0.0.0.0';
process.env.PORT = process.env.PORT || '3300';

// 启动 API
require('kugoumusicapi/app.js');
