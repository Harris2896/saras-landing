import urllib.request,re,json
from concurrent.futures import ThreadPoolExecutor
names={'colombus':'nuoc-hoa-nam-sr-colombus-9ml','rocky':'nuoc-hoa-nam-sr-rocky-9ml','helen':'nuoc-hoa-unisex-sr-helen-9ml','catchy':'nuoc-hoa-nu-sr-catchy-9ml'}
def get(item):
 n,slug=item
 s=urllib.request.urlopen('https://sarasbeauty.vn/san-pham/'+slug+'/').read().decode()
 open('source-'+n+'.html','w',encoding='utf8').write(s)
 gallery=re.findall(r'data-large_image="([^"]+)"',s)
 return [n,list(dict.fromkeys(gallery))]
print(json.dumps(list(ThreadPoolExecutor().map(get,names.items())),ensure_ascii=False))
