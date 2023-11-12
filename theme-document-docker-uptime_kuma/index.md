# Sharing good tools - Uptime-kuma


<!--more-->

## Why you need website monitoring tools <br>

In a general environment where a website is deployed, the most important thing is to know whether the services provided by the website are down or whether the certificate has expired.


 
In the past, these things were monitored by writing scripts or programs, which was extremely troublesome for users without technical background. Especially after the monitoring is written, it also needs to be notified when something goes wrong, which undoubtedly makes reasonable monitoring more troublesome.

  <br>

Adhering to the idea that for complicated things, you should first find ready-made tools online instead of relying on yourself. So there is today’s protagonist Uptime-kuma

<br>

{{< admonition info >}}
If you want to experience the online interface and perform basic settings before installation, you can refer to the link below.

[Demo website link 10 minutes available version](https://demo.uptime.kuma.pet)
{{< /admonition >}}


<br>
Then let’s start installing it in our own environment to experience the effect of unlimited use.


{{< admonition note "Pre-installation requirements" >}}
- An environment with Docker is required (installation method is as follows)
   - Windows
     1. Run PowerShell or Windows Command Prompt as administrator to install WSL and then restart your computer
     ~~~ Powershell
     wsl --install
     ~~~
     2. Download Docker Desktop
  <br>
   - Ubuntu copy and paste in Terminal
     ~~~bash
     sudo apt-get update
     sudo apt-get install \
     ca-certificates\
     curl \
     gnupg\
     lsb-release
     sudo mkdir -m 0755 -p /etc/apt/keyrings
     curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
     echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
     sudo apt-get update
     sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
     sudo gpasswd -a $USER docker
     newgrp docker
     ~~~
{{< /admonition >}}

## Uptime-kuma installation

Enter Power Shell/Terminal and enter the following command
~~~docker
docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1
~~~


{{< admonition note "Instruction note" >}}
   >- -d will make the container run in the background
   >- -restart starts docker and automatically starts monitoring
   >- -p The internal network port corresponds to the external (host) port number
   >- -v data storage location Add uptime-kuma folder to the current directory of the machine to synchronize the app/data directory of the container
{{< /admonition >}}

### Connection UI interface
{{< admonition abstract "Open browser input " >}}
If you want to experience the online interface and perform basic settings before installation, you can refer to the link below.
~~~
http://localhost:3001
~~~
If Ubuntu does not have a desktop installed, you can refer to the following methods
~~~bash
   ufw allow 3001 #Open external firewall
   ip -a #Find the IP of the current host and then use an external connection to enter
~~~
{{< /admonition >}}




## UI settings
Entering the UI requires setting an account and password.
![UI](./setting.png)

Start with the simplest web page monitoring
![monitor](./monitor.png)
Enter the URL to be monitored

![monitor_setting](./monitor_setting.png)
If you have advanced needs, you can also check the box to check the remaining days of the voucher.
![ssl_check](./ssl_check.png)

## Alarm system Line Notify settings
Can set more than one notification
![notify](./notify.png)
When you see that a token is required and there are instructions below on how to get it, click on the URL in the red box below.
![token](./token.png)
Click on the upper right corner
![line_login](./line_login.png)
You can choose to log in with an account or qrcode
![line_login_2](./line_login_2.png)
You can choose how notification is sent. It can be directed to individuals or in groups. Test first to see the effect on 1-on-1 basis.
![publish_token](./publish_token.png)


After logging in, scroll to the bottom and click Issue Token
![publish](./publish.png)
Just get the token and fill it back into the web page
![copy_token](./copy_token.png)

## Simulation monitoring failure example
The configuration file of Ping is as follows. The type of ping and simulation of a non-existent URL are combined with notification settings.
![fail](./fail.png)
## result
It can be seen that the website's response time is 0.2 seconds on average, the response rate is normal and the certificate expires in 58 days.
![result1](./result1.png)

If it fails, a message will be sent
![notify_error](./notify.jpeg)

## References
[Official Github](https://github.com/louislam/uptime-kuma)
