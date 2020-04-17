randomTime = random(2, 3)*1000;

toast("王者荣耀刷金币脚本V1.0 启动...");
sleep(3000);
toast("当前分辨率，宽："+device.width+" 高："+device.height);

//自动设置适合屏幕宽高
setScreenMetrics(device.width, device.height);
sleep(randomTime);

//申请截图权限
if(!images.requestScreenCapture(true))
{
    toast("获取截图权限失败！");
    exit();
}
else
{
    toast("获取截图权限成功！");
}
sleep(randomTime);


//万象天工
click(1720,794);
sleep(randomTime);
click(218,250);
sleep(randomTime);
click(1179,521);
sleep(randomTime);
click(671,332);
sleep(randomTime);
click(1230,462);
sleep(randomTime);
click(1685,680);
sleep(randomTime);
click(1714,920);
sleep(randomTime);

/**
 * 循环部分
 */

for(var i = 0;i<999;i++)
{
    click(1644,875);
    
    var flag = true;
    var continueImg = images.read("/sdcard/ScreenCapture/continue.jpg");
    var jumpImg = images.read("/sdcard/ScreenCapture/jump.jpg");
    
    sleep(40000);
    
    while(flag)
    {
        //截图保存
        var img = images.captureScreen();
        images.save(img, "/sdcard/ScreenCapture/WZstatus.png");
        var statusImg = images.read("/sdcard/ScreenCapture/WZstatus.png");

        if(images.findImage(statusImg, jumpImg)!=null)
        {
            click(2194,64);
            sleep(1000);
        }
        if(images.findImage(statusImg, continueImg)!=null)
        {
            click(1184,967);
            sleep(1000);
            click(1184,967);
            flag = false;
        }
    }
    continueImg.recycle();
    jumpImg.recycle();
    toast("释放图片资源")

    sleep(5000);
    click(1963,1001);
    click(1963,1001);
}
//找到跳过

    //click(2135,966);

    //click(1184,967);