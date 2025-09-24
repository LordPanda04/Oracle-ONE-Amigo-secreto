# Challenge Oracle-ONE: Amigo secreto 🎉

**Realizado por:** Leonardo Justo Panta Labán  

---

## 📌 Descripción
Este proyecto es parte del **Challenge de Oracle ONE**.  
La aplicación permite ingresar nombres de amigos en una lista y luego realizar un sorteo aleatorio para elegir un **"amigo secreto"**.  

Una vez realizado el sorteo, la lista de amigos se reinicia para poder comenzar un nuevo juego.  

---

## ⚙️ Instalación

1. Clona este repositorio o descarga el proyecto en tu computadora:
   ```bash
   git clone https://github.com/LordPanda04/Oracle-ONE-Amigo-secreto.git

2. Asegúrate de que la estructura de archivos sea la siguiente:
    /amigo-secreto
    ├── index.html
    ├── style.css
    ├── app.js
    ├── assets/
    ├── amigo-secreto.png
    └── play_circle_outline.png


3. No se necesitan dependencias externas.  
   El proyecto utiliza **HTML, CSS y JavaScript puro**, por lo que no requiere instalación de librerías adicionales.

---

# ▶️ Ejecución del proyecto

1. Abre el archivo `index.html` directamente en tu navegador (doble clic o clic derecho → *Abrir con* → Chrome/Firefox/Edge).  
2. Escribe un nombre en el campo de texto.  
3. Haz clic en **"Añadir"** para agregar el nombre a la lista.  
4. Repite el proceso con todos los amigos que quieras incluir.  
5. Haz clic en **"Sortear amigo"** y la aplicación elegirá uno al azar.  
6. Después del sorteo, la lista se reiniciará automáticamente para iniciar un nuevo juego.  

---

## ❗ Posibles problemas y soluciones

- **No aparece nada al hacer clic en los botones:**  
  - Verifica que `app.js` esté en la misma carpeta que `index.html`.  
  - Confirma que el nombre sea exactamente `app.js` (no `app.js.txt`).  
  - Abre la consola del navegador (F12 → Consola) para revisar si hay errores.  

- **No se cargan las imágenes:**  
  - Revisa que la carpeta `assets/` exista y que los nombres de las imágenes sean correctos (`amigo-secreto.png`, `play_circle_outline.png`).  
  - Recuerda que los sistemas operativos distinguen entre mayúsculas y minúsculas en los nombres de archivo.  

- **El sorteo no funciona:**  
  - Asegúrate de haber agregado al menos un nombre antes de hacer clic en "Sortear amigo".  
  - Si la lista está vacía, el programa mostrará un `alert`.  

---

## 🚀 Tecnologías utilizadas

- **HTML5** para la estructura.  
- **CSS3** para los estilos.  
- **JavaScript (Vanilla JS)** para la lógica del juego.  
