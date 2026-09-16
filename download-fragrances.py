import urllib.request,re,json
from PIL import Image
from concurrent.futures import ThreadPoolExecutor
rows=[]
def get(n):
 s=open('source-'+n+'.html',encoding='utf8').read();urls=list(dict.fromkeys(re.findall(r'data-large_image="([^"]+)"',s)));url=urls[3 if n=='rocky' else 2]
 urllib.request.urlretrieve(url,n+'.jpg');im=Image.open(n+'.jpg');im.thumbnail((700,900));im.convert('RGB').save('dist/assets/'+n+'.webp',quality=85);return {'name':n,'url':url}
rows=list(ThreadPoolExecutor().map(get,['colombus','rocky','helen','catchy']))
open('fragrance-sources.json','w',encoding='utf8').write(json.dumps(rows,indent=2));print(rows)
