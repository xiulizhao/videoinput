# videoinput
获取本地视频, 并输出视频的src, 可供预览使用. 最终上传时需上传元素里头的input元素<br>
输出属性<br>
data-x-videosrc	用户所选择的视频的src. 将其放入视频元素的控制属性即可. 如何放入, 使用数据绑定	<br>
data-x-videoname	用户所选择的视频的文件名	<br>
data-x-filesize	获取当前文件的大小，单位：字节	<br>
发出事件<br>
getvideo	当用户选择了视频后触发, 触发该事件时, 您可在元素的输出属性上获取该视频的src	无<br>
