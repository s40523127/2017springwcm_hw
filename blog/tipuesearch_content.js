var tipuesearch = {"pages":[{"title":"網路線製作以及配置","text":"網路線製作過程 剪下所需長度的線-->用美工刀剝線-->整線-->將線排列成568A或568B-->裝上接頭(最容易出錯)-->壓接-->測試-->完成 568a:白綠、綠、白橙、藍、白藍、橙、白棕、棕 568b:白橙、橙、白綠、藍、白藍、綠、白棕、棕 網路線:568a+568a or 568b+568b 跳線:568a+568b or 568b+568a","url":"./wang-lu-xian-zhi-zuo-yi-ji-pei-zhi.html","tags":"2017springwcm_g4"},{"title":"Fossil SCM的推送","text":"利用 Fossil SCM 管理 mp4 影片檔案的步驟 1.fossil clone https://帳號@網址 ................. 下載網站內容並附加帳號資訊 2.打密碼並記住密碼 3.mkdir 資料夾名................. 創一個新資料夾 4.cd 資料夾名................. 進入資料夾 5.fossil open ./../fossil檔 ................. 開啟上一個資料夾的fossil檔 6.將要上傳的東西複製進新創的資料夾 7.fossil add .................. 加入所有改變 8.fossil commit -m \"留言\" ................. 提交並附帶留言","url":"./fossil-scmde-tui-song.html","tags":"2017springwcm_g4"},{"title":"IPv6環境設定","text":"設定Ipv6環境 開啟網路介面卡-->進入內容-->開啟Ipv6-->點選Ipv6內容-->輸入DNS伺服器位置 慣用DNS: [2001:288:6004:1:2] (本校) 其他DNS:[2001:b000:168:1] (中華電信) Ipv6 的 Proxy 設定 address: [2001:288:6004:17::17] Port: 3128","url":"./ipv6huan-jing-she-ding.html","tags":"2017springwcm_g4"},{"title":"Ubuntu中啟動stunnel和fossil","text":"stunnel和fossil的安裝 1.sudo apt update 更新 2.sudo apt install stunnel4 -y 安裝stunnel14 3.sudo apt install fossil 安裝fossil 啟動設定: 進入/etc/environment中 改HTTPS=on 進入/etc/default/stunnel4中 改ENABLED=1 stunnel設定和fossil: stunnel.conf sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt 建立local.key和local.crt /etc/stunnel/stunnel.conf設定支援IPV6 [https] accept = :::443 cert = /etc/stunnel/localhost.crt key = /etc/stunnel/localhost.key exec = /usr/bin/fossil execargs = /usr/bin/fossil http /home/user/repository/mde2a1.fossil --https --nojail --nojail 目的在 drop the root privilege but do not enter the chroot jail 重新啟動 stunnel4 則使用 /etc/init.d/stunnel4 restart 設定完成後, 重新開機即可以 https://yourip 連結至自己組別的主機 不過以上我有很多指令都看不懂...只能硬記","url":"./ubuntuzhong-qi-dong-stunnelhe-fossil.html","tags":"2017springwcm_g4"},{"title":"電腦拆解以及重新組裝(合體)","text":"目的是為了使小組一起建立實體主機的伺服器 我們使設計系即將淘汰的兩台電腦合為一體，使他能續航，並能使其成為更加強大的電腦，得以用來建立順暢的伺服器 。 首先，我們把一台電腦機殼側蓋開啟。拔出還原卡、RAM以及硬碟。並裝在另一台電腦上，這樣就完成兩台電腦的升級以及淘汰了 比較差異HDD vs SSD 讀取速度 HDD vs SSD(勝) 價格 HDD(較便宜) vs SSD 功耗 HDD vs SSD(較低) 噪音 HDD vs SSD(安靜) 檔案救援 HDD(可以) vs SSD(無法)","url":"./dian-nao-chai-jie-yi-ji-zhong-xin-zu-zhuang-he-ti.html","tags":"2017springwcm_g4"},{"title":"在Ubuntu 16.04 環境下啟動 Stunnel 與 Fossil SCM","text":"練習如何在 Ubuntu 操作系統中, 安裝並設定 Stunnel 後與 Fossil SCM server 結合啟動。 首先，開啟終端機(terminal) 開始安裝Stunnel 與 Fossil SCM： sudo apt update sudo apt install stunnel4 -y sudo apt install fossil 輸入完畢後，接下來需要更改某些資料夾目錄中的環境變數及做開機啟動設定。 sudo vi /etc/environment 其中vi代表進入目錄並更改或設定其內容。 進入後按下o，即進入編寫模式及換到下一行，輸入： HTTPS=on 接著按下esc鍵，輸入:wq，其中w代表編寫(write)、 q代表離開(quit)。 sudo vi /etc/default/stunnel4 進入後將ENABLED=0中的\"0\"改為\"1\"。 到這裡即完成環境變數以及開機啟動設定。 最後我們要設定Stunnel 並執行 fossil http 指令，然後在特定目錄中建立兩個檔案。 分別是localhost.key 與 localhost.crt 首先，更換目錄： cd /etc/stunnel/ 進入目錄後，即可編輯並建立這兩個我們所需的檔案： ls -s sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt sudo vi /etc/stunnel/stunnel.conf 進入後，將下列資料輸入： [https] accept = 此電腦的IPv4ip:443 accept = :::443(此為IPv6，若無需使用可直接跳過不打) cert = /etc/stunnel/localhost.crt key = /etc/stunnel/localhost.key exec = /usr/bin/fossil execargs = /usr/bin/fossil http /home/user/repository/自己的小組.fossil -- https --nojail 其中 --nojail 目的在 drop the root privilege but do not enter the chroot jail 最後輸入sudo /etc/init.d/stunnel4 restart後，重新開機虛擬機即可以https: //yourip 連結至 mde2a1.fossil 網際管理介面","url":"./zai-ubuntu-1604-huan-jing-xia-qi-dong-stunnel-yu-fossil-scm.html","tags":"2017springwcm_g4"},{"title":"在Ubuntu16.04中安裝nginx及設定網路","text":"上一步驟完成安裝Ubuntu後，再來需要把網路設定好，才能上網。 點擊齒輪後選擇網路，再選擇右下角的選項，將自己的網路IP等資料輸入後，按下儲存，即可利用瀏覽器上網。 接著練習的是安裝nginx軟件 開啟終端機(terminal)後，輸入： sudo apt install nginx service nginx start 輸入密碼後再從瀏覽器網址輸入http ://localhost/就會出現wellcome to nginx的字樣。 也可以觀看練習影片： 在Ubuntu16.04中安裝nginx及設定網路 from 張皓然 on Vimeo .","url":"./zai-ubuntu1604zhong-an-zhuang-nginxji-she-ding-wang-lu.html","tags":"2017springwcm_g4"},{"title":"在虛擬機中安裝UBUNTU","text":"此步驟將練習如何安裝VirtualBox後，啟動虛擬主機並在其內安裝Ubuntu。 首先須準備VirtualBox主程式及Ubuntu安裝映像檔(此處使用桌面版)。 在VirtualBox新增虛擬主機後，必須設定一些需求才能開始啟動，包含了: 1.自訂系統名稱 2.類型選擇Linux 3.版本選擇Ubuntu64-bit 4.記憶體大小設定(依照本機來判斷給予多少記憶體) 5.硬碟選擇立即建立虛擬硬碟 6.設定虛擬機要存放的位置、給予虛擬硬碟多少容量(建議10GB以上最好是20GB) 7.硬碟類型選擇VHD(虛擬硬碟)，設定好之後即可建立一個虛擬主機(或稱虛擬電腦)。 在建立完成後，需要設定之後內部要使用的網路，不然就沒有網路啦！ 點選左上角的設定值→網路，附加選擇的是橋接介面卡，而MAC位址需判斷自身網路狀況輸入，因為我用的是學校宿舍網路，打上網路的實體位址。完成後點下OK鈕。 接下來就可以按下啟動鍵了！啟動後虛擬機會顯示選取啟動的磁碟，這時候拿出一開始準備的Ubuntu，瀏覽選擇後按下啟動，就能在使用Ubuntu的系統下開啟VirtualBox虛擬主機。 接著在設定密碼及安裝一些軟件後，就已經成功安裝完成。 也可以觀看練習過程影片： bandicam 2017-04-27 19-52-41-095 from 張皓然 on Vimeo .","url":"./zai-xu-ni-ji-zhong-an-zhuang-ubuntu.html","tags":"2017springwcm_g4"}]};