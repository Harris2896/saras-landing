import pypdfium2 as pdf
from pypdf import PdfReader
from pathlib import Path
for n in ['cb-albatross','cb-clover','cb-helen']:
 p='source-assets/'+n+'.pdf'
 doc=pdf.PdfDocument(p);im=doc[0].render(scale=1.6).to_pil();im.save('dist/assets/'+n+'.webp',quality=91)
 text='\n'.join(x.extract_text() or '' for x in PdfReader(p).pages)
 Path('source-assets/'+n+'.txt').write_text(text,encoding='utf8')
 print(n,len(doc),ascii(text[:2000]))
