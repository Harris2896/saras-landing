import json,urllib.request,os
from concurrent.futures import ThreadPoolExecutor
from PIL import Image,ImageOps,ImageDraw
os.makedirs('source-assets',exist_ok=True)
def dl(j):
 p='source-assets/'+j['key']+'.'+j['ext'];req=urllib.request.Request(j['url'],headers={'User-Agent':'Mozilla/5.0'}); open(p,'wb').write(urllib.request.urlopen(req).read())
 if j['ext']=='jpg':
  im=ImageOps.exif_transpose(Image.open(p));im.thumbnail((1100,1600));im.save('dist/assets/'+j['key']+'.webp',quality=88)
 return j['key']
print(list(ThreadPoolExecutor().map(dl,json.load(open('asset-downloads.json')))))
canvas=Image.new('RGB',(1000,700),'white');d=ImageDraw.Draw(canvas)
for i,k in enumerate(['portrait68','portrait78','portrait90','portrait99']):
 im=Image.open('dist/assets/'+k+'.webp');im.thumbnail((240,650));canvas.paste(im,(i*250,25));d.text((i*250,5),k,fill='black')
canvas.save('source-assets/portrait-contact.jpg')

