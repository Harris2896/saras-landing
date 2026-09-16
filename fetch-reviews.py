import urllib.request,re
from html import unescape
from concurrent.futures import ThreadPoolExecutor
slugs=['sua-rua-mat-da-nang-sach-sau-sr-clover','kem-chong-nang-the-thao-albatross-spf100-pa-khang-nuoc-khong-bet-dinh-bao-ve-da-toi-da-50ml','combo-7-ngay-7-mui-nuoc-hoa-uk-doc-dao']
def get(slug):
 s=urllib.request.urlopen('https://sarasbeauty.vn/san-pham/'+slug+'/').read().decode(); parts=[]
 for m in re.finditer('Thanh Huyền',s):
  part=s[max(0,m.start()-300):m.start()+1800];parts.append(unescape(re.sub('<[^>]+>',' ',part)))
 return {'slug':slug,'review':parts[:1]}
print(list(ThreadPoolExecutor().map(get,slugs)))
