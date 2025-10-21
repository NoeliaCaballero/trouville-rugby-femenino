# Script para mover archivos al repositorio clonado
# Mover archivos del proyecto a la carpeta Trouville

# Cambiar al directorio Trouville
Set-Location "Trouville"

# Copiar archivos principales
Copy-Item -Path "..\src" -Destination "." -Recurse -Force
Copy-Item -Path "..\public" -Destination "." -Recurse -Force
Copy-Item -Path "..\package.json" -Destination "." -Force
Copy-Item -Path "..\package-lock.json" -Destination "." -Force
Copy-Item -Path "..\vite.config.js" -Destination "." -Force
Copy-Item -Path "..\tailwind.config.js" -Destination "." -Force
Copy-Item -Path "..\postcss.config.js" -Destination "." -Force
Copy-Item -Path "..\index.html" -Destination "." -Force
Copy-Item -Path "..\README.md" -Destination "." -Force

# Copiar archivos de documentación
Copy-Item -Path "..\*.md" -Destination "." -Force

Write-Host "Archivos copiados exitosamente al repositorio Trouville"
