# Run this script ONCE inside your project folder
# Right-click this file → "Run with PowerShell"

$folder = Split-Path -Parent $MyInvocation.MyCommand.Path

function Rename-Photo($pattern, $newName) {
    $file = Get-ChildItem -Path $folder -Filter $pattern | Select-Object -First 1
    if ($file) {
        Rename-Item -Path $file.FullName -NewName $newName -Force
        Write-Host "✅ Renamed: $($file.Name) → $newName"
    } else {
        Write-Host "⚠️  Not found: $pattern"
    }
}

Rename-Photo "*11_24_21*"      "img1.jpeg"
Rename-Photo "*3_08_20*1_*"    "img2.jpeg"
Rename-Photo "*3_08_20*2_*"    "img3.jpeg"
Rename-Photo "*3_08_20*3_*"    "img4.jpeg"
Rename-Photo "*3_08_20*5_*"    "img5.jpeg"
Rename-Photo "*3_08_20*9_*"    "img6.jpeg"
Rename-Photo "*3_08_20*10_*"   "img7.jpeg"
Rename-Photo "*3_08_21*4_*"    "img9.jpeg"
Rename-Photo "*6_38_41*1_*"    "img10.jpeg"
Rename-Photo "*6_38_41*"       "img11.jpeg"

# This one last (no number suffix - must come after the numbered ones)
Rename-Photo "*3_08_20*PM.jpeg" "img8.jpeg"

Write-Host ""
Write-Host "🎉 All done! Now restart your server with: npm start"
Write-Host "Then open: http://localhost:3000"