#####################################
# Created By BuanaNETPBun.Github.io 
#####################################
/ip firewall raw
rem [find comment="Vidio - buananetpbun.github.io"]
add action=add-dst-to-address-list address-list=Mikrotik-Vidio address-list-timeout=1d chain=prerouting comment="Vidio - buananetpbun.github.io" content=.vidio. dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP

/ip firewall address-list
rem [find list="Mikrotik-Vidio"]
add list=Mikrotik-Vidio add=vidio.com
add list=Mikrotik-Vidio add=www.vidio.com
add list=Mikrotik-Vidio add=m.vidio.com
add list=Mikrotik-Vidio add=bbm.vidio.com
add list=Mikrotik-Vidio add=api.vidio.com
add list=Mikrotik-Vidio add=about.vidio.com
add list=Mikrotik-Vidio add=chat.vidio.com
add list=Mikrotik-Vidio add=int.vidio.com
add list=Mikrotik-Vidio add=hermes.vidio.com
add list=Mikrotik-Vidio add=staging.vidio.com
add list=Mikrotik-Vidio add=live.vidio.com
add list=Mikrotik-Vidio add=app.vidio.com
add list=Mikrotik-Vidio add=email2.vidio.com
add list=Mikrotik-Vidio add=support.vidio.com
add list=Mikrotik-Vidio add=dev.vidio.com
add list=Mikrotik-Vidio add=blog.vidio.com
add list=Mikrotik-Vidio add=c.vidio.com
add list=Mikrotik-Vidio add=tv.vidio.com
add list=Mikrotik-Vidio add=careers.vidio.com
add list=Mikrotik-Vidio add=cdn-production-thumbor-vidio.akamaized.net
add list=Mikrotik-Vidio add=geo-id-media-vidio-com.akamaized.net
add list=Mikrotik-Vidio add=token-geo-id-media-vidio-com.akamaized.net
add list=Mikrotik-Vidio add=token-media-vidio-com.akamaized.net
add list=Mikrotik-Vidio add=quiz.vidio.com.edgekey.net
add list=Mikrotik-Vidio add=etslive-2-vidio-com.akamaized.net
add list=Mikrotik-Vidio add=userlocation.googleapis.com
add list=Mikrotik-Vidio add=01tto88sm58k5.int.m.vidio.com
add list=Mikrotik-Vidio add=airflow.m.vidio.com
add list=Mikrotik-Vidio add=airflow.int.m.vidio.com
add list=Mikrotik-Vidio add=app.m.vidio.com
add list=Mikrotik-Vidio add=app-etslive.m.vidio.com
add list=Mikrotik-Vidio add=app-etslive-2.m.vidio.com
add list=Mikrotik-Vidio add=app-etslive-2.int.m.vidio.com
add list=Mikrotik-Vidio add=app-etslive.int.m.vidio.com
add list=Mikrotik-Vidio add=app.staging.m.vidio.com
add list=Mikrotik-Vidio add=autodiscover.staging.m.vidio.com
add list=Mikrotik-Vidio add=bbm.int.m.vidio.com
add list=Mikrotik-Vidio add=bbm.staging.m.vidio.com
add list=Mikrotik-Vidio add=blog.m.vidio.com
add list=Mikrotik-Vidio add=careers.m.vidio.com
add list=Mikrotik-Vidio add=chat.m.vidio.com
add list=Mikrotik-Vidio add=chat-platform.int.m.vidio.com
add list=Mikrotik-Vidio add=chat.int.m.vidio.com
add list=Mikrotik-Vidio add=ci.m.vidio.com
add list=Mikrotik-Vidio add=dashboard-ets.int.m.vidio.com
add list=Mikrotik-Vidio add=dashboard-quiz.int.m.vidio.com
add list=Mikrotik-Vidio add=demo-etslive.int.m.vidio.com
add list=Mikrotik-Vidio add=dynlink.staging.m.vidio.com
add list=Mikrotik-Vidio add=etsdrm-trolld.int.m.vidio.com
add list=Mikrotik-Vidio add=etslive.int.m.vidio.com
add list=Mikrotik-Vidio add=fashion.live.m.vidio.com
add list=Mikrotik-Vidio add=feyiweiwooch-origin.staging.m.vidio.com
add list=Mikrotik-Vidio add=fnfuwafjqpeej.int.m.vidio.com
add list=Mikrotik-Vidio add=gandiwa.m.vidio.com
add list=Mikrotik-Vidio add=gandiwa-int.m.vidio.com
add list=Mikrotik-Vidio add=gcs-etslive.int.m.vidio.com
add list=Mikrotik-Vidio add=img.mail.m.vidio.com
add list=Mikrotik-Vidio add=inside.m.vidio.com
add list=Mikrotik-Vidio add=int.m.vidio.com
add list=Mikrotik-Vidio add=lgtxnzg11tc98.int.m.vidio.com
add list=Mikrotik-Vidio add=m.m.vidio.com
add list=Mikrotik-Vidio add=m.int.m.vidio.com
add list=Mikrotik-Vidio add=m.staging-2.m.vidio.com
add list=Mikrotik-Vidio add=m2.m.vidio.com
add list=Mikrotik-Vidio add=m2.int.m.vidio.com
add list=Mikrotik-Vidio add=m3.m.vidio.com
add list=Mikrotik-Vidio add=mail.m.vidio.com
add list=Mikrotik-Vidio add=media.origin.dev.m.vidio.com
add list=Mikrotik-Vidio add=media.origin.int.m.vidio.com
add list=Mikrotik-Vidio add=media.origin.prod.m.vidio.com
add list=Mikrotik-Vidio add=ocs-inventory.m.vidio.com
add list=Mikrotik-Vidio add=quiz.m.vidio.com
add list=Mikrotik-Vidio add=quiz.int.m.vidio.com
add list=Mikrotik-Vidio add=r.mail.m.vidio.com
add list=Mikrotik-Vidio add=staging.m.vidio.com
add list=Mikrotik-Vidio add=staging-2.m.vidio.com
add list=Mikrotik-Vidio add=staging-plenty.m.vidio.com
add list=Mikrotik-Vidio add=staging.careers.m.vidio.com
add list=Mikrotik-Vidio add=static-origin.dev.m.vidio.com
add list=Mikrotik-Vidio add=static-origin.staging.m.vidio.com
add list=Mikrotik-Vidio add=static-playback.origin.m.vidio.com
add list=Mikrotik-Vidio add=static-playback.origin.int.m.vidio.com
add list=Mikrotik-Vidio add=static-quiz.origin.m.vidio.com
add list=Mikrotik-Vidio add=static-quiz.origin.int.m.vidio.com
add list=Mikrotik-Vidio add=static-thumbor-aws.origin.m.vidio.com
add list=Mikrotik-Vidio add=static-thumbor-aws.origin.int.m.vidio.com
add list=Mikrotik-Vidio add=stickers.m.vidio.com
add list=Mikrotik-Vidio add=support.m.vidio.com
add list=Mikrotik-Vidio add=telkomsel.m.vidio.com
add list=Mikrotik-Vidio add=telkomsel.staging.m.vidio.com
add list=Mikrotik-Vidio add=thumbor-aws.origin.m.vidio.com
add list=Mikrotik-Vidio add=thumbor-aws.origin.int.m.vidio.com
add list=Mikrotik-Vidio add=thumbor.dev.m.vidio.com
add list=Mikrotik-Vidio add=thumbor.int.m.vidio.com
add list=Mikrotik-Vidio add=upload.m.vidio.com
add list=Mikrotik-Vidio add=web-etslive.int.m.vidio.com
add list=Mikrotik-Vidio add=www.m.vidio.com
add list=Mikrotik-Vidio add=www.blog.m.vidio.com
add list=Mikrotik-Vidio add=www.int.m.vidio.com
add list=Mikrotik-Vidio add=www.staging.m.vidio.com
add list=Mikrotik-Vidio add=www.staging-2.m.vidio.com
add list=Mikrotik-Vidio add=www2.m.vidio.com
add list=Mikrotik-Vidio add=www2.int.m.vidio.com
add list=Mikrotik-Vidio add=www2.staging.m.vidio.com
add list=Mikrotik-Vidio add=www3.m.vidio.com
