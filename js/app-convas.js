/**
 * App Canvas de Modelo de Negocio
 * Versión 2.0
 * Desarrollado para Weblocalmx
 */

// ========== CONFIGURACIÓN Y CONSTANTES ==========
const CONFIG = {
    PASSWORD_CORRECTO: 'canvas2025@',
    AUTO_SAVE_INTERVAL: 30000, // 30 segundos
    EJEMPLOS: {
        'respuesta-nombre-proyecto': 'Psicología Online | María Sánchez',
        'respuesta-segmentacion1': 'Adultos con ansiedad o estrés (25-45 años)',
        'respuesta-segmentacion2': 'Profesionales con horarios complicados',
        'respuesta-propuesta1': 'Terapia psicológica online personalizada con horarios flexibles y enfoque en mindfulness',
        'respuesta-canes1': 'Sitio web profesional',
        'respuesta-canes2': 'Perfiles en redes sociales (Instagram y LinkedIn)',
        'respuesta-canes3': 'Plataformas de terapia online',
        'respuesta-canes4': 'Blog con contenido sobre salud mental',
        'respuesta-canes5': 'Referencias de pacientes',
        'respuesta-relacion-clientes1': 'Sesiones de evaluación inicial gratuitas',
        'respuesta-relacion-clientes2': 'Seguimiento personalizado entre sesiones',
        'respuesta-relacion-clientes3': 'Boletín mensual con ejercicios y consejos',
        'respuesta-relacion-clientes4': 'Comunidad privada de apoyo',
        'respuesta-relacion-clientes5': 'Recordatorios y confirmaciones automáticas',
        'respuesta-ingresos1': 'Sesiones individuales de terapia online',
        'respuesta-ingresos2': 'Paquetes de sesiones con descuento',
        'respuesta-ingresos3': 'Talleres grupales temáticos',
        'respuesta-ingresos4': 'E-books y guías de autoayuda',
        'respuesta-ingresos5': 'Cursos online pregrabados',
        'respuesta-recursos1': 'Certificación en psicología clínica',
        'respuesta-recursos2': 'Plataforma segura de videollamadas',
        'respuesta-recursos3': 'Software de gestión de citas y pacientes',
        'respuesta-recursos4': 'Espacio tranquilo y profesional para sesiones',
        'respuesta-recursos5': 'Material terapéutico digital',
        'respuesta-actividades1': 'Sesiones de terapia individual',
        'respuesta-actividades2': 'Creación de contenido educativo',
        'respuesta-actividades3': 'Formación continua especializada',
        'respuesta-actividades4': 'Networking con otros profesionales',
        'respuesta-actividades5': 'Investigación en nuevas técnicas terapéuticas',
        'respuesta-colaboradores1': 'Psiquiatras para casos que requieran medicación',
        'respuesta-colaboradores2': 'Especialistas en nutrición y hábitos saludables',
        'respuesta-colaboradores3': 'Desarrollador web y especialista en SEO',
        'respuesta-colaboradores4': 'Plataformas de pago seguro',
        'respuesta-colaboradores5': 'Asociaciones de salud mental',
        'respuesta-costes1': 'Licencias profesionales y seguros',
        'respuesta-costes2': 'Suscripciones a plataformas de videollamadas',
        'respuesta-costes3': 'Formación continua y supervisión',
        'respuesta-costes4': 'Publicidad y marketing digital',
        'respuesta-costes5': 'Herramientas y software especializado'
    }
};

// ========== SELECCIÓN DE ELEMENTOS DOM ==========
const DOM = {

     // Elementos de login
     loginSection: document.getElementById('login-section'),
     appContent: document.getElementById('app-content'),
     loginButton: document.getElementById('login-button'),
     passwordInput: document.getElementById('password'),
     togglePassword: document.getElementById('toggle-password'),
     loginError: document.getElementById('login-error'),
     cerrarSesionBtn: document.getElementById('cerrar-sesion'),
     


    // Formulario
    formulario: document.getElementById('formulario'),
    mensajeCarga: document.getElementById('mensaje-carga'),
    
    // Sección de resultados
    canvasResultado: document.getElementById('canvas-resultado'),
    
    // Botones
    generarCanvasBtn: document.getElementById('generar-canvas'),
    guardarJsonBtn: document.getElementById('guardar-json'),
    cargarJsonInput: document.getElementById('cargar-json'),
    descargarPdfBtn: document.getElementById('descargar-pdf'),
    volverFormularioBtn: document.getElementById('volver-formulario'),
    imprimirBtn: document.getElementById('btn-imprimir'),
    
    // Modales
    modalExito: document.getElementById('modal-exito'),
    modalError: document.getElementById('modal-error'),
    modalTitulo: document.getElementById('modal-titulo'),
    modalMensaje: document.getElementById('modal-mensaje'),
    modalErrorMensaje: document.getElementById('modal-error-mensaje'),
    cerrarModalBtns: document.querySelectorAll('.cerrar-modal')
};

// Mapeado de campos de formulario a campos de canvas
const MAPEADO_CAMPOS = {
    'respuesta-nombre-proyecto': 'nombre-del-proyecto',
    'respuesta-propuesta1': 'propuesta-de-valor1',
    'respuesta-segmentacion1': 'segmentacion1',
    'respuesta-segmentacion2': 'segmentacion2',
    'respuesta-canes1': 'canales1',
    'respuesta-canes2': 'canales2',
    'respuesta-canes3': 'canales3',
    'respuesta-canes4': 'canales4',
    'respuesta-canes5': 'canales5',
    'respuesta-relacion-clientes1': 'relacion-clientes1',
    'respuesta-relacion-clientes2': 'relacion-clientes2',
    'respuesta-relacion-clientes3': 'relacion-clientes3',
    'respuesta-relacion-clientes4': 'relacion-clientes4',
    'respuesta-relacion-clientes5': 'relacion-clientes5',
    'respuesta-ingresos1': 'fuente-ingresos1',
    'respuesta-ingresos2': 'fuente-ingresos2',
    'respuesta-ingresos3': 'fuente-ingresos3',
    'respuesta-ingresos4': 'fuente-ingresos4',
    'respuesta-ingresos5': 'fuente-ingresos5',
    'respuesta-recursos1': 'recursos1',
    'respuesta-recursos2': 'recursos2',
    'respuesta-recursos3': 'recursos3',
    'respuesta-recursos4': 'recursos4',
    'respuesta-recursos5': 'recursos5',
    'respuesta-actividades1': 'actividades1',
    'respuesta-actividades2': 'actividades2',
    'respuesta-actividades3': 'actividades3',
    'respuesta-actividades4': 'actividades4',
    'respuesta-actividades5': 'actividades5',
    'respuesta-colaboradores1': 'colaboradores1',
    'respuesta-colaboradores2': 'colaboradores2',
    'respuesta-colaboradores3': 'colaboradores3',
    'respuesta-colaboradores4': 'colaboradores4',
    'respuesta-colaboradores5': 'colaboradores5',
    'respuesta-costes1': 'costes1',
    'respuesta-costes2': 'costes2',
    'respuesta-costes3': 'costes3',
    'respuesta-costes4': 'costes4',
    'respuesta-costes5': 'costes5'
};

// Obtener todos los IDs de campos de formulario
const TODOS_CAMPOS_FORMULARIO = Object.keys(MAPEADO_CAMPOS);

/**
 * Clase de autenticación que maneja el login y cierre de sesión
 */
class Auth {
    constructor() {
        this._sesionActiva = localStorage.getItem('sesionActiva') === 'true';
        this._initEventListeners();
        this._checkActiveSession();
    }
    
    /**
     * Inicializa los event listeners relacionados con la autenticación
     */
    _initEventListeners() {
        // Botón de login
        if (DOM.loginButton) {
            DOM.loginButton.addEventListener('click', () => this._handleLogin());
        }
        
        // Enter en el campo de contraseña
        if (DOM.passwordInput) {
            DOM.passwordInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    this._handleLogin();
                }
            });
        }
        
        // Toggle para mostrar/ocultar contraseña
        if (DOM.togglePassword) {
            DOM.togglePassword.addEventListener('click', () => this._togglePasswordVisibility());
        }
        
        // Botón de cerrar sesión
        if (DOM.cerrarSesionBtn) {
            DOM.cerrarSesionBtn.addEventListener('click', () => this._handleLogout());
        }
    }
    
    /**
     * Maneja el intento de inicio de sesión
     */
    _handleLogin() {
        const password = DOM.passwordInput.value;
        
        if (password === CONFIG.PASSWORD_CORRECTO) {
            this._iniciarSesion();
        } else {
            this._mostrarErrorLogin('Contraseña incorrecta. Inténtalo de nuevo.');
        }
    }
    
    /**
     * Muestra mensaje de error en el formulario de login
     * @param {string} mensaje - Mensaje de error a mostrar
     */
    _mostrarErrorLogin(mensaje) {
        if (DOM.loginError) {
            DOM.loginError.textContent = mensaje;
            DOM.loginError.classList.add('visible');
            DOM.passwordInput.value = '';
            DOM.passwordInput.focus();
            
            setTimeout(() => {
                DOM.loginError.classList.remove('visible');
            }, 3000);
        }
    }
    
    /**
     * Alterna la visibilidad del campo de contraseña
     */
    _togglePasswordVisibility() {
        const type = DOM.passwordInput.type === 'password' ? 'text' : 'password';
        DOM.passwordInput.type = type;
        
        // Cambiar el icono
        const icon = DOM.togglePassword.querySelector('i');
        if (type === 'text') {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    }
    
    /**
     * Inicia la sesión y muestra la aplicación
     */
    _iniciarSesion() {
        this._sesionActiva = true;
        localStorage.setItem('sesionActiva', 'true');
        
        if (DOM.loginSection && DOM.appContent) {
            DOM.loginSection.style.display = 'none';
            DOM.appContent.style.display = 'block';
            
            if (DOM.cerrarSesionBtn) {
                DOM.cerrarSesionBtn.style.display = 'block';
            }
        }
        
        // Aplicar animación de entrada
        DOM.appContent.classList.add('fade-in');
    }
    
    /**
     * Maneja el cierre de sesión
     */
    _handleLogout() {
        this._sesionActiva = false;
        localStorage.removeItem('sesionActiva');
        
        if (DOM.loginSection && DOM.appContent) {
            DOM.appContent.style.display = 'none';
            DOM.loginSection.style.display = 'flex';
            DOM.cerrarSesionBtn.style.display = 'none';
            DOM.passwordInput.value = '';
        }
    }
    
    /**
     * Verifica si hay una sesión activa al cargar la página
     */
    _checkActiveSession() {
        if (this._sesionActiva) {
            this._iniciarSesion();
        }
    }
    
    /**
     * Devuelve si la sesión está activa
     */
    get isActive() {
        return this._sesionActiva;
    }
}











/**
 * Clase para gestionar el formulario y el Canvas
 */
class CanvasManager {
    constructor() {
        this._datos = {};
        this._autoSaveTimeout = null;
        this._initEventListeners();
        this._cargarDatosGuardados();
        
        // Precargar los datos de ejemplo en los campos del formulario como placeholders
        for (let campo in CONFIG.EJEMPLOS) {
            const elemento = document.getElementById(campo);
            if (elemento) {
                elemento.placeholder = CONFIG.EJEMPLOS[campo];
            }
        }
    }
    
    /**
     * Inicializa todos los event listeners
     */
    _initEventListeners() {
        // Envío del formulario para generar Canvas
        if (DOM.formulario) {
            DOM.formulario.addEventListener('submit', (event) => {
                event.preventDefault();
                this.generarCanvas();
            });
        }
        
        // Botón para guardar JSON
        if (DOM.guardarJsonBtn) {
            DOM.guardarJsonBtn.addEventListener('click', () => this.guardarJSON());
        }
        
        // Cargar desde archivo JSON
        if (DOM.cargarJsonInput) {
            DOM.cargarJsonInput.addEventListener('change', (event) => this._cargarDesdeArchivo(event));
        }
        
        // Botón para volver al formulario
        if (DOM.volverFormularioBtn) {
            DOM.volverFormularioBtn.addEventListener('click', () => this._mostrarFormulario());
        }
        
        // Botón para descargar PDF
        if (DOM.descargarPdfBtn) {
            DOM.descargarPdfBtn.addEventListener('click', () => this._imprimirPDF());
        }
        
        // Botón para imprimir desde la barra superior
        if (DOM.imprimirBtn) {
            DOM.imprimirBtn.addEventListener('click', () => this._imprimirPDF());
        }
        
        // Auto-guardar al cambiar cualquier campo
        TODOS_CAMPOS_FORMULARIO.forEach(campo => {
            const elemento = document.getElementById(campo);
            if (elemento) {
                elemento.addEventListener('input', () => this._programarAutoguardado());
            }
        });
        
        // Inicializar botones de cerrar modal
        if (DOM.cerrarModalBtns.length > 0) {
            DOM.cerrarModalBtns.forEach(btn => {
                btn.addEventListener('click', () => this._cerrarModales());
            });
        }
    }
    
    /**
     * Programa el autoguardado después de un tiempo de inactividad
     */
    _programarAutoguardado() {
        // Limpiar timeout anterior
        if (this._autoSaveTimeout) {
            clearTimeout(this._autoSaveTimeout);
        }
        
        // Establecer nuevo timeout
        this._autoSaveTimeout = setTimeout(() => {
            this._guardarDatosLocalmente();
            this._mostrarNotificacion('Progreso guardado automáticamente', 'success', 2000);
        }, CONFIG.AUTO_SAVE_INTERVAL);
    }
    
    /**
     * Recopila los datos actuales del formulario
     * @returns {Object} Objeto con los datos del formulario
     */
    _recopilarDatosFormulario() {
        const datos = {};
        
        TODOS_CAMPOS_FORMULARIO.forEach(campo => {
            const elemento = document.getElementById(campo);
            if (elemento) {
                datos[campo] = elemento.value;
            }
        });
        
        return datos;
    }
    
    /**
     * Carga datos guardados del localStorage
     */
    _cargarDatosGuardados() {
        const datosGuardados = localStorage.getItem('canvasModeloDatos');
        
        if (datosGuardados) {
            try {
                const datos = JSON.parse(datosGuardados);
                this._datos = datos;
                
                // Rellenar formulario con datos guardados
                for (let campo in datos) {
                    const elemento = document.getElementById(campo);
                    if (elemento) {
                        elemento.value = datos[campo];
                    }
                }
            } catch (error) {
                console.error('Error al cargar datos guardados:', error);
                this._mostrarModal('error', 'Error al cargar datos', 'No se pudieron cargar los datos guardados correctamente.');
            }
        }
    }
    
    /**
     * Guarda los datos actuales en localStorage
     */
    _guardarDatosLocalmente() {
        const datos = this._recopilarDatosFormulario();
        this._datos = datos;
        localStorage.setItem('canvasModeloDatos', JSON.stringify(datos));
    }
    
//    generar canvas nuevo
  
generarCanvas() {
    // Mostrar indicador de carga
    if (DOM.mensajeCarga) {
        DOM.mensajeCarga.classList.add('visible');
    }
    
    // Recopilar datos del formulario directamente
    const datos = {};
    TODOS_CAMPOS_FORMULARIO.forEach(campo => {
        const elemento = document.getElementById(campo);
        if (elemento) {
            datos[campo] = elemento.value;
            console.log(`Campo ${campo}: "${elemento.value}"`);
        }
    });
    
    // Guardar datos
    this._datos = datos;
    this._guardarDatosLocalmente();
    
    // Aplicar cambios con un retraso para mostrar animación de carga
    setTimeout(() => {
        // Limpiar y actualizar cada elemento del canvas directamente
        for (let campoFormulario in MAPEADO_CAMPOS) {
            const campoCanvas = MAPEADO_CAMPOS[campoFormulario];
            const elemento = document.getElementById(campoCanvas);
            if (elemento) {
                const valor = datos[campoFormulario] || '';
                console.log(`Actualizando ${campoCanvas} con: "${valor}"`);
                // Usar esta aproximación más directa
                elemento.innerHTML = '';
                elemento.appendChild(document.createTextNode(valor));
            }
        }
        
        // Mostrar canvas
        this._mostrarCanvas();
        
        // Ocultar indicador de carga
        if (DOM.mensajeCarga) {
            DOM.mensajeCarga.classList.remove('visible');
        }
    }, 800);
}
    
  /**
 * Actualiza los elementos del Canvas con los valores correspondientes
 * @param {Object} datos - Datos para mostrar en el Canvas
 */
_actualizarCanvas(datos) {
    for (let campoFormulario in MAPEADO_CAMPOS) {
        const campoCanvas = MAPEADO_CAMPOS[campoFormulario];
        const elemento = document.getElementById(campoCanvas);
        
        if (elemento) {
            // Limpiar el contenido anterior
            elemento.textContent = '';
            
            // Establecer el nuevo valor
            const valor = datos[campoFormulario] || '';
            elemento.textContent = valor;
            
            // Añadir clase si tiene contenido
            if (valor.trim() !== '') {
                elemento.classList.add('con-contenido');
            } else {
                elemento.classList.remove('con-contenido');
            }
        }
    }
    
    // Forzar reflow del DOM para asegurar actualización visual
    if (DOM.canvasResultado) {
        DOM.canvasResultado.offsetHeight;
        
        // Agregar una pequeña pausa para asegurar que los cambios se reflejen
        setTimeout(() => {
            // Aplicar una clase temporal para forzar repintado
            DOM.canvasResultado.classList.add('repintado');
            setTimeout(() => {
                DOM.canvasResultado.classList.remove('repintado');
            }, 50);
        }, 100);
    }
}
    
    /**
     * Muestra la sección del Canvas y oculta el formulario
     */
    _mostrarCanvas() {
        if (DOM.formulario && DOM.canvasResultado) {
            // Primero eliminar cualquier clase de animación anterior
            DOM.formulario.classList.remove('fadeIn', 'fadeOut');
            DOM.canvasResultado.classList.remove('fadeIn', 'fadeOut');
            
            // Ocultar formulario inmediatamente
            DOM.formulario.style.display = 'none';
            
            // Mostrar canvas y forzar repintado
            DOM.canvasResultado.style.display = 'block';
            DOM.canvasResultado.offsetHeight; // Forzar reflow
            
            // Luego aplicar animación
            DOM.canvasResultado.classList.add('fadeIn');
            
            // Desplazarse al inicio
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
 /**
 * Muestra el formulario y oculta el Canvas
 */
 _mostrarFormulario() {
    if (DOM.canvasResultado && DOM.formulario) {
        // Primero eliminar cualquier clase de animación anterior
        DOM.canvasResultado.classList.remove('fadeIn', 'fadeOut');
        DOM.formulario.classList.remove('fadeIn', 'fadeOut');
        
        // Transferir datos del Canvas al formulario
        for (let campoFormulario in MAPEADO_CAMPOS) {
            const campoCanvas = MAPEADO_CAMPOS[campoFormulario];
            const elementoCanvas = document.getElementById(campoCanvas);
            const elementoFormulario = document.getElementById(campoFormulario);
            
            if (elementoCanvas && elementoFormulario) {
                const contenido = elementoCanvas.textContent || '';
                console.log(`Transfiriendo: ${campoCanvas} → ${campoFormulario}: "${contenido}"`);
                elementoFormulario.value = contenido;
            }
        }
        
        // Ocultar canvas inmediatamente
        DOM.canvasResultado.style.display = 'none';
        
        // Mostrar formulario y forzar repintado
        DOM.formulario.style.display = 'block';
        DOM.formulario.offsetHeight; // Forzar reflow
        
        // Luego aplicar animación
        DOM.formulario.classList.add('fadeIn');
    }
}
    
    /**
     * Guarda los datos como archivo JSON
     */
    guardarJSON() {
        // Actualizar datos con valores actuales
        const datos = this._recopilarDatosFormulario();
        this._datos = datos;
        this._guardarDatosLocalmente();
        
        // Descargar archivo
        this._downloadJSONFile(datos);
        this._mostrarNotificacion('Archivo JSON guardado correctamente', 'success');
    }
    
    /**
     * Función auxiliar para descargar un archivo JSON
     * @param {Object} datos - Datos a convertir en JSON y descargar
     */
    _downloadJSONFile(datos) {
        const datosJSON = JSON.stringify(datos, null, 2);
        const blob = new Blob([datosJSON], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        
        // Crear link para descargar
        const a = document.createElement('a');
        a.href = url;
        a.download = 'canvas-modelo-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    /**
     * Carga datos desde un archivo JSON
     * @param {Event} event - Evento de cambio en el input file
     */
    _cargarDesdeArchivo(event) {
        const archivo = event.target.files[0];
        
        if (archivo) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                try {
                    const datos = JSON.parse(e.target.result);
                    
                    // Rellenar formulario con datos del JSON
                    for (let campo in datos) {
                        const elemento = document.getElementById(campo);
                        if (elemento) {
                            elemento.value = datos[campo];
                        }
                    }
                    
                    // Guardar datos
                    this._datos = datos;
                    this._guardarDatosLocalmente();
                    
                    this._mostrarModal('exito', 'Archivo cargado', 'El archivo JSON se ha cargado correctamente');
                    
                    // Generar el canvas después de cargar los datos
                    this.generarCanvas();
                } catch (error) {
                    this._mostrarModal('error', 'Error al cargar', 'El archivo seleccionado no tiene un formato JSON válido');
                }
            };
            
            reader.readAsText(archivo);
        }
    }
    
    /**
     * Imprime o guarda como PDF el Canvas
     */
    _imprimirPDF() {
        // Si el canvas no está visible, mostrarlo primero
        if (DOM.canvasResultado.style.display === 'none') {
            this.generarCanvas();
            setTimeout(() => {
                this._ejecutarImpresion();
            }, 1000);
        } else {
            this._ejecutarImpresion();
        }
    }
    
    /**
     * Ejecuta la acción de impresión
     */
    _ejecutarImpresion() {
        const nombreProyecto = document.getElementById('nombre-del-proyecto').textContent;
        const titulo = nombreProyecto || 'Canvas Modelo de Negocio';
        
        window.print();
    }
    
    /**
     * Muestra una notificación temporal
     * @param {string} mensaje - Mensaje a mostrar
     * @param {string} tipo - Tipo de notificación (success, error, info)
     * @param {number} duracion - Duración en ms (por defecto 2500)
     */
    _mostrarNotificacion(mensaje, tipo = 'success', duracion = 2500) {
        // Crear elemento de notificación
        const notificacion = document.createElement('div');
        notificacion.className = `notificacion notificacion-${tipo}`;
        
        // Icono según tipo
        let icono = 'check-circle';
        if (tipo === 'error') icono = 'exclamation-circle';
        if (tipo === 'info') icono = 'info-circle';
        
        notificacion.innerHTML = `
            <i class="fas fa-${icono}"></i>
            <span>${mensaje}</span>
        `;
        
        // Agregar al cuerpo del documento
        document.body.appendChild(notificacion);
        
        // Mostrar con animación
        setTimeout(() => {
            notificacion.classList.add('visible');
        }, 10);
        
        // Ocultar después de la duración
        setTimeout(() => {
            notificacion.classList.remove('visible');
            setTimeout(() => {
                document.body.removeChild(notificacion);
            }, 300);
        }, duracion);
    }
    
    /**
     * Muestra un modal de éxito o error
     * @param {string} tipo - Tipo de modal (exito, error)
     * @param {string} titulo - Título del modal
     * @param {string} mensaje - Mensaje del modal
     */
    _mostrarModal(tipo, titulo, mensaje) {
        const modal = tipo === 'exito' ? DOM.modalExito : DOM.modalError;
        
        if (tipo === 'exito' && DOM.modalTitulo && DOM.modalMensaje) {
            DOM.modalTitulo.textContent = titulo;
            DOM.modalMensaje.textContent = mensaje;
        } else if (DOM.modalErrorMensaje) {
            DOM.modalErrorMensaje.textContent = mensaje;
        }
        
        // Mostrar modal
        if (modal) {
            modal.classList.add('visible');
        }
    }
    
    /**
     * Cierra todos los modales
     */
    _cerrarModales() {
        const modales = [DOM.modalExito, DOM.modalError];
        
        modales.forEach(modal => {
            if (modal) {
                modal.classList.remove('visible');
            }
        });
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar sistema de autenticación
    window.auth = new Auth();
    
    // Iniciar gestor del Canvas
    window.canvasManager = new CanvasManager();
    
    // Añadir listener para cerrar modales al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            window.canvasManager._cerrarModales();
        }
    });
    
    // Añadir listener para cerrar modales con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.canvasManager._cerrarModales();
        }
    });
});

/**
 * Guarda los datos como archivo JSON
 */
function guardarJSON() {
    // Recopilar datos del formulario
    const datos = {};
    const formFields = document.querySelectorAll("input[id^='respuesta-']");
    
    formFields.forEach(field => {
        datos[field.id] = field.value;
    });
    
    // Convertir a JSON y descargar
    const datosJSON = JSON.stringify(datos, null, 2);
    const blob = new Blob([datosJSON], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    
    // Crear link para descargar
    const a = document.createElement('a');
    a.href = url;
    a.download = 'canvas-modelo-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Mostrar mensaje de éxito (opcional)
    alert('Archivo JSON guardado correctamente');
}

/**
 * Carga datos desde un archivo JSON
 */
function cargarJSON(event) {
    const archivo = event.target.files[0];
    
    if (archivo) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const datos = JSON.parse(e.target.result);
                
                // Rellenar formulario con datos del JSON
                for (let campo in datos) {
                    const elemento = document.getElementById(campo);
                    if (elemento) {
                        elemento.value = datos[campo];
                    }
                }
                
                // Mostrar mensaje de éxito (opcional)
                alert('El archivo JSON se ha cargado correctamente');
                
            } catch (error) {
                alert('Error: El archivo seleccionado no tiene un formato JSON válido');
            }
        };
        
        reader.readAsText(archivo);
    }
}

// Añadir event listeners a los botones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const guardarJsonBtn = document.getElementById('guardar-json');
    const cargarJsonInput = document.getElementById('cargar-json');
    
    if (guardarJsonBtn) {
        guardarJsonBtn.addEventListener('click', guardarJSON);
    }
    
    if (cargarJsonInput) {
        cargarJsonInput.addEventListener('change', cargarJSON);
    }


// nuevo












});