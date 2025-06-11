# Sistema Automatizado de Gestión de Trámites Municipales

Este proyecto implementa un sistema web para la gestión y priorización automática de trámites municipales usando machine learning. Incluye un portal ciudadano para ingresar y consultar trámites, y un panel administrativo para el personal municipal.

---

## **Estructura del Proyecto**

```
tramites_ml/
│
├── backend/           # Código Python (Flask API, ML, almacenamiento)
│
├── frontend/          # Archivos HTML, JS y CSS del sitio web
│
├── package.json       # Configuración de npm y scripts de arranque
├── README.md          # Este archivo
└── .gitignore         # Exclusiones para git
```

---

## **Funcionamiento**

### **Frontend**

- **Portal Ciudadano:**  
  Permite a los ciudadanos ingresar nuevos trámites y consultar el estado de los mismos.
- **Panel Administrativo:**  
  Permite al personal municipal ver, filtrar y gestionar los trámites recibidos, priorizados automáticamente por el modelo de ML.

### **Backend**

- **API REST con Flask:**  
  Recibe los trámites, los clasifica usando un modelo de machine learning y los almacena.
- **Modelo de Machine Learning:**  
  Entrenado para asignar prioridad ("Alta" o "Baja") a cada trámite según su descripción.

---

## **Requisitos**

- **Python 3.8+**
- **Node.js y npm**
- **(Recomendado) Entorno virtual Python:**  
  Usa `venv` para aislar las dependencias de Python.

---

## **Instalación y Ejecución**

1. **Clona el repositorio:**
   ```bash
   [git clone https://github.com/usuario/tramites_ml.git](https://github.com/loganz18/trabajo-python.git)
   cd tramites_ml
   ```

2. **Configura el entorno virtual de Python:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # En Windows: venv\Scripts\activate
   ```

3. **Instala las dependencias de Python:**
   ```bash
   pip install flask flask-cors scikit-learn pandas joblib
   ```

4. **Instala las dependencias de Node.js:**
   ```bash
   npm install
   ```

5. **Entrena el modelo de ML (solo la primera vez o si cambias los datos):**
   ```bash
   cd backend
   python entrenar_modelo.py
   cd ..
   ```

6. **Levanta todo el proyecto:**
   ```bash
   npm start
   ```

7. **El sistema abrirá automáticamente el portal en tu navegador:**
   - Frontend: [http://localhost:5500/index.html](http://localhost:5500/index.html)
   - Backend API: [http://localhost:5000](http://localhost:5000)

---

## **Notas sobre dependencias y entorno**

- Las **dependencias de Python** instaladas con `pip` **NO** se guardan en `__pycache__`.  
  - El directorio `__pycache__` solo contiene archivos compilados `.pyc` para acelerar la ejecución de Python.
  - Las dependencias se instalan en el entorno virtual (`venv`) y se deben listar en un archivo `requirements.txt` para compartirlas.
- Para generar `requirements.txt`:
  ```bash
  pip freeze > requirements.txt
  ```
- Para instalar desde `requirements.txt`:
  ```bash
  pip install -r requirements.txt
  ```

---

## **.gitignore recomendado**

```
# Node.js
node_modules/

# Python
venv/
__pycache__/
*.pyc

# Otros
.DS_Store
*.pkl
tramites_guardados.json
```

---

## **Licencia**

MIT

---

## **Contacto**

Para dudas o mejoras, abre un issue o pull request en el repositorio.
