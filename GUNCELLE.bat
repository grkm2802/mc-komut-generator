@echo off
echo Github'a yukleniyor...
git add .
git commit -m "Otomatik guncelleme"
git push origin main
echo Islem tamamlandi!
pause
