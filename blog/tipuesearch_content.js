var tipuesearch = {"pages":[{"url":"./pages/about/","title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","tags":"misc"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-di-1zhou-ren-wu.html","title":"協同產品設計實習第1週任務","text":"網際協同設計資料整合, 網際 2D 程式繪圖回顧 網際協同設計資料整合 利用 Github 倉儲中的組員間 git submodule 設定, 可以進行網際協同設計資料整合. 導入組員設計資料範例: http://mde.tw/2016fallcadp/blog/li-yong-git-submodule-gong-neng-jin-xing-zu-yuan-zi-liao-she-ji-zheng-he.html 導入組員程式範例: https://scrum-1.github.io/2016fallcadp_ag100/blog/dao-ru-zu-yuan-cheng-shi-ce-shi.html 網際 2D 程式繪圖回顧 利用 HTML5 Canvas 與 Brython, 可以進行網際 2D 設計模擬繪圖: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations https://www.codeproject.com/Articles/598955/CoordinateplussystemplusinplusHTML-plusCanvas-cpl http://blog.carbonfive.com/2011/03/31/taming-2d-transforms/ http://blog.carbonfive.com/2011/02/17/visualizing-skillsets-in-html5-canvas-part-1/ 利用網際 Python3 程式進行 2D 繪圖: window.onload=function(){ brython({debug:1, pythonpath:['./../scrum-1/py']}); } from browser import document import math # 準備繪圖畫布 canvas = document[\"canvas1\"] ctx = canvas.getContext(\"2d\") def axises(ctx): ctx.beginPath() # 設定線的寬度為 5 個單位 ctx.lineWidth = 5 # 將畫筆移動到 (0, 0) 座標點 ctx.moveTo(0, 0) # 然後畫直線到 (100, 0) 座標點 ctx.strokeStyle = \"red\" ctx.lineTo(100, 0) ctx.lineTo(90, 10) ctx.stroke() ctx.closePath() ctx.beginPath() # 畫右上左下的斜線 ctx.moveTo(0, 0) ctx.strokeStyle = \"green\" ctx.lineTo(0, 100) ctx.lineTo(10, 90) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 #ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() axises(ctx) # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 畫右上左下的斜線 ctx.moveTo(150, 100) ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 以上為 canvas1, 座標軸 x 向右為正, y 向下為正. from browser import document import script1 import math # 準備繪圖畫布 canvas = document[\"canvas2\"] ctx = canvas.getContext(\"2d\") #ctx.save() #ctx.transform(1, 0, 0, -1, 0, canvas.height) def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def newCoord(x, y): global canvas newy = canvas.height - y return x, newy def canvasText(x, y, fontSize, string, sup, sub, center, color, ctx): #ctx.restore() #x, y = newCoord(x, y) ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" if center != \"\": ctx.fillText(string, x+fontSize/float(center), y) else: ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sub, x+fontSize/1.6, y+fontSize/4) ctx.fill() ctx.stroke() ctx.closePath() def canvasDot(x, y, r, color, ctx): #ctx.restore() #x, y = newCoord(x, y) ctx.beginPath() #ctx.fillStyle = 'black' ctx.fillStyle = color #ctx.strokeStyle = \"black\" ctx.strokeStyle = color #ctx.arc(50, 80, 9, 0, 2*math.pi, False) ctx.arc(x, y, r, 0, 2*math.pi, False) # 為了疊上各把位的音名, 暫時不填色 ctx.fill() ctx.stroke() w = 20 h = 30 script1.axises(ctx) background(100, 100, w, h, 5, 5, ctx) mylist = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] num = 0 for s in mylist: #canvasText(100, 80, 20, \"A\", \"b\", \"\", \"\", \"black\", ctx) canvasText(100+num*w, 80, 20, s, \"\", \"\", \"\", \"black\", ctx) num = num + 1 canvasText(100+num*w, 80, 20, \"A\", \"b\", \"\", \"\", \"black\", ctx) num = num + 1 canvasText(100, 80+h*7, 20, \"(\", \"\", \"\", \"2.5\", \"black\", ctx) inc = 18 canvasText(100+inc*1, 80+h*7, 20, \"x\", \"2\", \"1\", \"\", \"black\", ctx) canvasText(100+inc*2, 80+h*7, 20, \",\", \"\", \"\", \"4\", \"black\", ctx) canvasText(100+inc*3, 80+h*7, 20, \"y\", \"\", \"1\", \"\", \"black\", ctx) canvasText(100+inc*4, 80+h*7, 20, \")\", \"\", \"\", \"4\", \"black\", ctx) canvasDot(100+inc*1, 80+h*8, 5, \"red\", ctx) 以上為 canvas2, 座標軸 x 向右為正, y 向下為正. from browser import document import script1 import math # 準備繪圖畫布 canvas = document[\"canvas3\"] ctx = canvas.getContext(\"2d\") # save original state ctx.save() ctx.transform(1, 0, 0, -1, 0, canvas.height) def newCoord(x, y): global canvas newy = canvas.height - y return x, newy def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, center, color, ctx): ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" if center != \"\": ctx.fillText(string, x+fontSize/float(center), y) else: ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sub, x+fontSize/1.6, y+fontSize/4) ctx.fill() ctx.stroke() ctx.closePath() def canvasDot(x, y, r, color, ctx): ctx.beginPath() #ctx.fillStyle = 'black' ctx.fillStyle = color #ctx.strokeStyle = \"black\" ctx.strokeStyle = color #ctx.arc(50, 80, 9, 0, 2*math.pi, False) ctx.arc(x, y, r, 0, 2*math.pi, False) # 為了疊上各把位的音名, 暫時不填色 ctx.fill() ctx.stroke() w = 20 h = 30 # 畫座標軸線 script1.axises(ctx) ctx.restore() background(100, 100, w, h, 5, 5, ctx) mylist = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] num = 0 for s in mylist: #canvasText(100, 80, 20, \"A\", \"b\", \"\", \"\", \"black\", ctx) canvasText(100+num*w, 80, 20, s, \"\", \"\", \"\", \"black\", ctx) num = num + 1 ctx.save() canvasText(100+num*w, 80, 20, \"A\", \"b\", \"\", \"\", \"black\", ctx) num = num + 1 canvasText(100, 80+h*7, 20, \"(\", \"\", \"\", \"2.5\", \"black\", ctx) inc = 18 canvasText(100+inc*1, 80+h*7, 20, \"x\", \"2\", \"1\", \"\", \"black\", ctx) canvasText(100+inc*2, 80+h*7, 20, \",\", \"\", \"\", \"4\", \"black\", ctx) canvasText(100+inc*3, 80+h*7, 20, \"y\", \"\", \"1\", \"\", \"black\", ctx) canvasText(100+inc*4, 80+h*7, 20, \")\", \"\", \"\", \"4\", \"black\", ctx) canvasDot(100+inc*1, 80+h*8, 5, \"red\", ctx) 以上為 canvas3, 座標軸 x 向右為正, y 向上為正. from browser import document import math # 準備繪圖畫布 canvas = document[\"canvas4\"] ctx = canvas.getContext(\"2d\") ctx.fillRect(0, 0, 150, 150) #Draw a rectangle with default settings ctx.save() #Save the default state ctx.fillStyle = '#09F' #Make changes to the settings ctx.fillRect(15, 15, 120, 120) #Draw a rectangle with new settings ctx.save() #Save the current state ctx.fillStyle = '#FFF'; #Make changes to the settings ctx.globalAlpha = 0.5 ctx.fillRect(30, 30, 90, 90) #Draw a rectangle with new settings ctx.restore() #Restore previous state ctx.fillRect(45, 45, 60, 60) #Draw a rectangle with restored settings ctx.restore() #Restore original state ctx.fillRect(60, 60, 30, 30) #Draw a rectangle with restored settings W1 實習任務 請自行分組每班分為八組, 各組協調後每一位組員均採固定座位就坐, 請各組設法列出各組員座位圖後, 以全班協同方式直接在各組網誌上呈現各組員學號與座位圖, 以 a 班為例, 各組倉儲名稱分別為 2017springcd_ag1~2017springcd_ag8, 各組的網誌中均必須設法呈現全班的電腦教室座位圖. (問題: 有沒有辦法在每週上課後第1堂下課之前, 在各組網誌上呈現當週各學員的出席情況與座次表?) 各組必須準備一個隨身硬碟儲存下載的可攜系統, 並且分別下載 tiny2017_50MB.7z , 以及 tiny2017_1GB.7z , 各組期中簡報時, 必須說明如何從最基本的 50MB 系統逐一納入各類工具得到 1GB 的最終可攜系統. (問題: 各組員會不會從無到有, 自行打造此一可攜程式系統?) 每四組將分配一台電腦當作區網協同伺服主機, 請各組分別指派一名組員負責, 向助教報到, 以便學習如何搭建區域網路上的 Fossil SCM 協同主機, 並負責為各組員建立及管理相關帳號. (問題: 各組有沒有能力自行維護區域網路上的協同產品設計主機?) 本學期課程將會使用 Github, Bitbucket, Vimeo, Youtube, Fossil SCM (由各組自行建立) 與 Onshape 等系統, 請各組員確定已經利用學號作為代號, 擁用各系統的擷取帳號. (問題: 如何呈現階段性的設計實習成果?) 請各組員確認已經會在 Solvespace 與 Onshape 中完成四連桿機構的組立, 並且輸出 stl 格式檔案後, 輸入 V-rep 中. (課程終極目標: 本課程將嘗試從電腦輔助機械設計進入運動模擬, 納入簡單的機電整合與傳動, 最後期望每班協同模擬並列印組立出兩台四足行走機構) 本學期每週上課結束前, 各組均必須直接在 Github Page 中以 Reveal.js 格式, 完成各週的協同實習簡報檔, 其中包含各學員與各組任務執行進度與自評. 請根據上述網際繪圖程式架構, 以 Brython 完成下列四連桿機構的示意繪圖: 其中旋轉軸點為 A 座標為 (x1, y1), 旋轉軸端點為 B 座標為 (x2, y2), 第2連桿端點為 C 座標為 (x3, y3), 第3軸的固定端點則為 D 座標為 (x4, y4). 另外, 以 A 點為起點的主動旋轉桿長為 d1, BC 連桿長為 d2, CD 桿長度為 d3, AD 桿長為 d4, BC 連桿上與旋轉路徑目標點 E 對應的點為 F, 與 B 點的距離為 d5, 與 E 點垂直距離為 d6, 主動旋轉軸的逆時鐘旋轉角度則為 t. 此一平面四連桿的輸入為 x1, y1, x4, y4, d1, d2, d3, d5, d6, 以及 t, 輸出則為 E 點的運動路徑. 利用 sympy 求解: from sympy import * ''' 已知四連桿四個關鍵點座標分別為 A (x1, y1), B (x2, y2), C (x3, y3) 與 D (x4, y4) 且 E (x5, y5) 點相關參考x 座標距離為 d5, 而 y座標距離為 d6, 以及輸入角度逆時鐘轉 t 度 以 (x1, y1), (x4, y4), d1, d2, d3, d5, d6 及 t 等 10 個參數作為輸入, 求 E 點座標 (x5, y5) 假設 AB 連桿長度為 d1, BC 連桿長度為 d2, CD 連桿長度為 d3, AD 距離為 d4 ''' x1, x2, x3, x4, x5 = symbols('x1 x2 x3 x4 x5') y1, y2, y3, y4, y5 = symbols('y1 y2 y3 y4 y5') d1, d2, d3, d4, d5, d6, t, t3 = symbols('d1 d2 d3 d4 d5 d6 t t3') ah, bh, aj, dj, bd, hj, dk, bk = symbols('ah bh aj dj bd hj dk bk') # angle daj defined as daj daj, adj, bad, bcd, bdc, bdk = symbols('daj adj bad bcd bdc bdk') # degree factor degree, pi = symbols('degree pi') degree = pi/180.0 # 假設 B 點的絕對 y 座標方向投影點為 H d1 = sqrt((x1-x2)**2+(y1-y2)**2) #print(d1) d2 = sqrt((x2-x3)**2+(y2-y3)**2) d3 = sqrt((x3-x4)**2+(y3-y4)**2) d4 = sqrt((x1-x4)**2+(y1-y4)**2) ah = d1*cos(t) bh = sqrt(d1**2 - ah**2) aj = Abs(x4-x1) dj = Abs(y4-y1) dk = aj - ah bk = bh - dj t3 = bdc + bdk # for daj, dj**2 = d4**2+aj**2 -2*d4*aj*cos(daj) pos = 1 if pos == 1: daj = solve(-dj**2+d4**2+aj**2 -2*d4*aj*cos(daj), daj)[0] else: daj = solve(-dj**2+d4**2+aj**2 -2*d4*aj*cos(daj), daj)[1] #print(daj) # for adj, aj**2=d4**2+dj**2-2*d4*aj*cos(adj) if pos == 1: adj = solve(-aj**2+d4**2+dj**2-2*d4*aj*cos(adj), adj)[0] else: adj = solve(-aj**2+d4**2+dj**2-2*d4*aj*cos(adj), adj)[0] #print(adj) bad = t*degree - daj # according triangle tad find bd #bd**2 = d1**2+d4**2-2*d1*d4*cos(bad) if pos == 1: bd = solve(-bd**2+d1**2+d4**2-2*d1*d4*cos(bad), bd)[0] else: bd = solve(-bd**2+d1**2+d4**2-2*d1*d4*cos(bad), bd)[1] print(bd) if pos == 1: bcd = solve(-bd**2+d2**2+d3**2-2*d2*d3*cos(bcd), bcd)[0] else: bcd = solve(-bd**2+d2**2+d3**2-2*d2*d3*cos(bcd), bcd)[1] if pos == 1: bdk = solve(-bk**2+bd**2+dk**2-2*bd*dk*cos(bdk), bdk)[0] else: bdk = solve(-bk**2+bd**2+dk**2-2*bd*dk*cos(bdk), bdk)[1] if pos == 1: bdc = solve(-d2**2+d3**2+bd**2-2*d3*bd*cos(bdc), bdc)[0] else: bdc = solve(-d2**2+d3**2+bd**2-2*d3*bd*cos(bdc), bdc)[1] print(t3)","tags":"Course"},{"url":"./bg2cheng-yuan.html","title":"bg2成員","text":"成員 前排到後排排序: bg2_40423224 bg2_40423204 bg2_40423217 bg2_40423253 bg2_40423209 bg2_40423218 bg2_40423254 bg2_40423239 bg2_40423240 bg2_40423212","tags":"Course"},{"url":"./bg2fossil.html","title":"bg2Fossil","text":"bg2筆記放置","tags":"Course"}]};