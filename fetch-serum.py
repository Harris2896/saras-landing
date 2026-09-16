import urllib.request,re
u='https://sarasbeauty.vn/san-pham/serum-khu-mui-cao-cap-sr-lilac-sage-10ml/'
s=urllib.request.urlopen(u).read().decode();open('source-serum.html','w',encoding='utf8').write(s)
print(list(dict.fromkeys(re.findall(r'data-large_image="([^"]+)"',s))))
