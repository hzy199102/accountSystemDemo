/**
 * 编码
 * @type {{WEBSOCKET_OPENED: number, WEBSOCKET_CONNECTING: number, WEBSOCKET_CLOSED: number, WEBIM_RECONN_LENGTH: number, WEBIM_RECONN_NUM: number, WEBIM_KEEPALIVE_LENGTH: number, WEBIM_KEEPALIVE_MSG: number, WEBIM_KEEPALIVE_ANSWER: number, WEBIM_LOGIN_MSG: number, WEBIM_LOGOUT_MSG: number, WEBIM_SEND_MSG: number, WEBIM_SESSION_MSG: number, WEBIM_OFFLINE_MSG: number, WEBIM_READED_MAXVER_MSG: number, WEBIM_READED_COMFIRM_MSG: number, WEBIM_GET_NEAR_PERSION_MSG: number, WEBIM_POST_GPS_MSG: number, WEBIM_TRANSPREANT_MSG: number, WEBIM_LOGIN_SUCCEED_ANSWER: number, WEBIM_LOGIN_FAILED_ANSWER: number, WEBIM_LOGOUT_ANSWER: number, WEBIM_SEND_ANSWER: number, WEBIM_SESSION_ANSWER: number, WEBIM_OFFLINE_ANSWER: number, WEBIM_READED_MAXVER_ANSWER: number, WEBIM_READED_COMFIRM_ANSWER: number, WEBIM_GET_NEAR_PERSION_ANSWER: number, WEBIM_POST_GPS_ANSWER: number, WEBIM_PROTOCOL_ANSWER: number, WEBIM_PUSH_MSG: number, WEBIM_PUSH_SYSTEM_PROTOCOL: number, WEBIM_PUSH_CUSTOM_PROYOCOL: number, WEBIM_MSG_TYPE_TEXT: number, WEBIM_MSG_TYPE_IMAGE: number, WEBIM_MSG_TYPE_VOICE: number, WEBIM_MSG_TYPE_VIDEO: number, WEBIM_MSG_TYPE_LOCATION: number, WEBIM_MSG_TYPE_TIP: number, WEBIM_MSG_TYPE_NOTIFY: number, WEBIM_MSG_TYPE_TEXTANDIMAGE: number, WEBIM_MSG_TYPE_FILETYPE: number, WEBIM_MSG_TYPE_READEDCONFIRM: number, WEBIM_MSG_TYPE_USERDEFINE: number, WEBIM_GROUP_TYPE_PERSONAL: number, WEBIM_GROUP_TYPE_GROUPWIN: number, WEBIM_GROUP_TYPE_CHATROOM: number, WEBIM_GROUP_TYPE_LITTLESECRETARY: number, WEBIM_SYSTEM_KICKED_OFF: number, WEBIM_SYSTEM_ACCOUNT_CLOSURE: number, WEBIM_SYSTEM_MUL_TERMINAL_LOGIN: number, WEBIM_SYSTEM_SINGLE_LOGIN: number, WEBIM_SYSTEM_READED_RECEIPT: number, WEBIM_SYSTEM_MUL_TERMINAL_SYNC: number, WEBIM_SYSTEM_UPDATE_SDK_VERSION: number, WEBIM_CUSTOM_REQUEST_ADD_FRIEND: number, WEBIM_CUSTOM_DELETE_FRIEND: number, WEBIM_CUSTOM_AGREE_ADD_FRIEND: number, WEBIM_CUSTOM_REFUSE_ADD_FRIEND: number, WEBIM_CUSTOM_CREATE_GROUP_SUCCEED: number, WEBIM_CUSTOM_DELETE_GROUP: number, WEBIM_CUSTOM_GROUP_ADD_MEMBER_FOR_MANAGER: number, WEBIM_CUSTOM_GROUP_EXIT_MEMBER: number, WEBIM_CUSTOM_GROUP_KICKED_MEMBER: number, WEBIM_CUSTOM_GROUP_INFO_UPDATE: number, WEBIM_CUSTOM_GROUP_ADD_MEMBER: number, WEBIM_CUSTOM_REQUEST_REMOTE_DESKTOP: number, WEBIM_CUSTOM_AGREE_REQUEST_REMOTE_DESKTOP: number, WEBIM_CUSTOM_REFUSE_REQUEST_REMOTE_DESKTOP: number, WEBIM_CUSTOM_CANCEL_REMOTE_DESKTOP: number, WEBIM_CUSTOM_REMOTE_DEMO: number, WEBIM_CUSTOM_AGREE_REMOTE_DEMO: number, WEBIM_CUSTOM_REFUSE_REMOTE_DEMO: number, WEBIM_CUSTOM_CANCEL_REMOTE_DEMO: number, WEBIM_CUSTOM_REQUEST_VIDEO_SESSION: number, WEBIM_CUSTOM_AGREE_REQUEST_VIDEO_SESSION: number, WEBIM_CUSTOM_REFUSE_REQUEST_VIDEO_SESSION: number, WEBIM_CUSTOM_CANCEL_VIDEO_SESSION: number, WEBIM_CUSTOM_REQUEST_VOICE_SESSION: number, WEBIM_CUSTOM_AGREE_REQUEST_VOICE_SESSION: number, WEBIM_CUSTOM_REFUSE_REQUEST_VOICE_SESSION: number, WEBIM_CUSTOM_CANCEL_VOICE_SESSION: number, WEBIM_CUSTOM_USER_DEFINED: number}}
 */
var webim_code = {
    WEBIM_VERSION: "2.0.0",//版本
    //websocket的状态
    WEBSOCKET_OPENED: 1,//WEBSOKCET已打开
    WEBSOCKET_CONNECTING: 2,//WEBSOKCET正在建立连接
    WEBSOCKET_CLOSED: 3,//WEBSOKCET已关闭

    WEBIM_MESSAGE_TIMEOUT: 3*1000,//请求默认超时时间

    //重连机制
    WEBIM_RECONN_LENGTH: 60 * 1000,//重连机制间隔时间
    WEBIM_RECONN_NUM: 5,//重连机制重连次数

    //心跳
    WEBIM_KEEPALIVE_LENGTH: 100 * 1000,//心跳间隔（秒）
    WEBIM_KEEPALIVE_MSG: 1,//心跳请求
    WEBIM_KEEPALIVE_ANSWER: 2,//心跳应答

    //请求
    WEBIM_LOGIN_MSG: 301,//登录请求
    WEBIM_LOGOUT_MSG: 302,//登出请求
    WEBIM_SEND_MSG: 303,//发送消息请求（用户发消息通过服务器中转）
    WEBIM_SESSION_MSG: 304,//拉取会话请求
    WEBIM_OFFLINE_MSG: 305,//拉取消息请求
    WEBIM_READED_MAXVER_MSG: 306,//上报阅读消息最大编号
    WEBIM_READED_COMFIRM_MSG: 307,//send消息已读回执
    WEBIM_GET_NEAR_PERSION_MSG: 308,//拉取附近的人
    WEBIM_POST_GPS_MSG: 309,//上报位置信息
    WEBIM_TRANSPREANT_MSG: 399, //协议透传信息(自定义)

    //应答
    WEBIM_LOGIN_SUCCEED_ANSWER: 400,//登录成功应答
    WEBIM_LOGIN_FAILED_ANSWER: 401,//登录失败应答
    WEBIM_LOGOUT_ANSWER: 402,//登出应答
    WEBIM_SEND_ANSWER: 403,//消息回包应答
    WEBIM_SESSION_ANSWER: 404,//拉取会话回包
    WEBIM_OFFLINE_ANSWER: 405,//拉取消息回包
    WEBIM_READED_MAXVER_ANSWER: 406,//上报阅读消息最大编号回包
    WEBIM_READED_COMFIRM_ANSWER: 407,//send消息已读回执应答
    WEBIM_GET_NEAR_PERSION_ANSWER: 408,//拉取附近的人回包
    WEBIM_POST_GPS_ANSWER: 409,//上报位置信息回包
    WEBIM_SAOMA_LOGIN_ANSWER: 466, //扫码登录成功应答
    WEBIM_PROTOCOL_ANSWER: 499, //协议透传信息应答命令字（自定义）

    //系统主动推送
    WEBIM_PUSH_MSG: 501,//推送（从服务端发送消息给客户端）
    WEBIM_PUSH_SYSTEM_PROTOCOL: 502, //系统协议透传消息
    WEBIM_PUSH_CUSTOM_PROYOCOL: 599, //其它类型的协议透传消息（自定义）

    //推送消息类型
    WEBIM_MSG_TYPE_TEXT : 1,//文本
    WEBIM_MSG_TYPE_IMAGE : 2,//图片
    WEBIM_MSG_TYPE_VOICE : 3,//音频
    WEBIM_MSG_TYPE_VIDEO : 4,//视频
    WEBIM_MSG_TYPE_LOCATION : 5,//位置
    WEBIM_MSG_TYPE_TIP : 6,//提示
    WEBIM_MSG_TYPE_NOTIFY : 7,//通知
    WEBIM_MSG_TYPE_TEXTANDIMAGE : 8,//图文混合
    WEBIM_MSG_TYPE_FILETYPE : 9,//文件
    WEBIM_MSG_TYPE_READEDCONFIRM : 10,//已读回执
    WEBIM_MSG_TYPE_USERDEFINE : 99,//用户自定义

    //登录类型
    WEBIM_LOFIN_TYPE_SAOMA : 66,

    //聊天类型
    WEBIM_GROUP_TYPE_PERSONAL : 1,//私聊
    WEBIM_GROUP_TYPE_GROUPWIN : 2,//组聊
    WEBIM_GROUP_TYPE_CHATROOM : 3,//聊天室
    WEBIM_GROUP_TYPE_LITTLESECRETARY  : 4, //小秘书

    //系统透传协议类型
    WEBIM_SYSTEM_KICKED_OFF: 1,//被踢下线
    WEBIM_SYSTEM_ACCOUNT_CLOSURE: 2,//账号被封
    WEBIM_SYSTEM_MUL_TERMINAL_LOGIN: 3,//多终端登录通知
    WEBIM_SYSTEM_SINGLE_LOGIN: 4, //解除多终端登录通知
    WEBIM_SYSTEM_READED_RECEIPT: 5,//已读回执
    WEBIM_SYSTEM_MUL_TERMINAL_SYNC: 6,//多终端阅读同步
    WEBIM_SYSTEM_UPDATE_SDK_VERSION: 7, //更新SDK版本

    //自定义透传协议类型
    WEBIM_CUSTOM_REQUEST_ADD_FRIEND: 1,//邀请加为好友通知
    WEBIM_CUSTOM_DELETE_FRIEND: 2,//删除好友通知
    WEBIM_CUSTOM_AGREE_ADD_FRIEND: 3,//同意加为好友通知
    WEBIM_CUSTOM_REFUSE_ADD_FRIEND: 4, //拒绝加为好友通知
    WEBIM_CUSTOM_CREATE_GROUP_SUCCEED: 5,//群组创建成功
    WEBIM_CUSTOM_DELETE_GROUP: 6,//群组解散通知
    WEBIM_CUSTOM_GROUP_ADD_MEMBER_FOR_MANAGER: 7, //群组添加新成员通知(通知管理员有人加群)
    WEBIM_CUSTOM_GROUP_EXIT_MEMBER: 8,//群组成员退出通知
    WEBIM_CUSTOM_GROUP_KICKED_MEMBER: 9,//群组成员被踢出通知
    WEBIM_CUSTOM_GROUP_INFO_UPDATE: 10,//修改群组信息通知
    WEBIM_CUSTOM_GROUP_ADD_MEMBER: 11, //成员入群通知
    WEBIM_CUSTOM_REQUEST_REMOTE_DESKTOP : 21,//远程桌面请求
    WEBIM_CUSTOM_AGREE_REQUEST_REMOTE_DESKTOP: 22,//远程桌面请求：同意
    WEBIM_CUSTOM_REFUSE_REQUEST_REMOTE_DESKTOP: 23, //远程桌面请求：拒绝
    WEBIM_CUSTOM_CANCEL_REMOTE_DESKTOP: 24,//取消远程桌面
    WEBIM_CUSTOM_REMOTE_DEMO: 25,//远程演示
    WEBIM_CUSTOM_AGREE_REMOTE_DEMO: 26,//远程演示：同意
    WEBIM_CUSTOM_REFUSE_REMOTE_DEMO: 27, //远程演示：拒绝
    WEBIM_CUSTOM_CANCEL_REMOTE_DEMO: 28,//取消远程演示
    WEBIM_CUSTOM_REQUEST_VIDEO_SESSION: 29,//发起视频通话
    WEBIM_CUSTOM_AGREE_REQUEST_VIDEO_SESSION: 30, //发起视频通话：同意
    WEBIM_CUSTOM_REFUSE_REQUEST_VIDEO_SESSION: 31,//发起视频通话：拒绝
    WEBIM_CUSTOM_CANCEL_VIDEO_SESSION: 32,//取消视频通话
    WEBIM_CUSTOM_REQUEST_VOICE_SESSION: 33,//发起语音通话
    WEBIM_CUSTOM_AGREE_REQUEST_VOICE_SESSION: 34, //发起语音通话：同意
    WEBIM_CUSTOM_REFUSE_REQUEST_VOICE_SESSION : 35,//发起语音通话：拒绝
    WEBIM_CUSTOM_CANCEL_VOICE_SESSION: 36,//取消语音通话
    WEBIM_CUSTOM_SAOMA_SUCCESS: 65,//扫码成功
    WEBIM_CUSTOM_SAOMA_LOGIN_SUCCESS: 66,//扫码登录成功
    WEBIM_CUSTOM_USER_DEFINED: 100,//大于100为用户自定义透传信息

    //异常代码
    WEBIM_ERROR_CONFIG:101,//CONFIG文件配置不完整
    WEBIM_ERROR_BROWSER:102,//浏览器不兼容
    WEBIM_ERROR_WEBSOCKET:104,//不支持websocket
    WEBIM_ERROR_ONCLOSE:105,//走入websocket的onclose方法
    WEBIM_ERROR_ONERROR:106,//走入websocket的onerror方法
    WEBIM_ERROR_ENTERURL:201,//入口服务无响应
    WEBIM_ERROR_GETENTER:202,//入口服务信息获取失败
    WEBIM_ERROR_GETXMPPURL:203,//websocket地址获取失败
    WEBIM_ERROR_GETPDURL:204,//文件服务器地址失败
    WEBIM_ERROR_GENERATEPB:301,//生成消息数据出错
    WEBIM_ERROR_ANALYSISPB:302,//解析消息数据出错
    WEBIM_ERROR_PARAM:401//接口参数问题（漏传或者出错）
};
module.exports = webim_code;



