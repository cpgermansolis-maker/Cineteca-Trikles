# 📘 Guía de uso — Trikles Conta

**Contabilidad asistida por inteligencia artificial** para micro y pequeñas empresas y para estudiantes de contaduría.

Trikles Conta te permite **describir una operación en tus propias palabras** (por ejemplo: *"pagué $500 de gasolina en efectivo"*) y la inteligencia artificial arma por ti el **asiento contable de partida doble**. A partir de tus asientos, la app genera **sola** los libros y estados financieros, estima tus impuestos y te avisa de tus fechas fiscales.

> ⚠️ **Aviso importante:** Trikles Conta es una **herramienta de apoyo**, **no sustituye a un contador profesional**. Las simulaciones de impuestos y las fechas fiscales son **estimaciones** que debes confirmar con tu contador y con el SAT.

---

## 1. Cómo abrir la app

- Ve a la carpeta `Trikles Conta` y haz **doble clic en `index.html`**. Se abre en tu navegador. No necesitas instalar nada.
- Tus datos se guardan **en ese navegador** (en tu computadora). Si abres la app en otra compu, empezarás desde cero (más adelante habrá cuentas en línea para verlos desde cualquier lado).
- Necesitas **conexión a internet** para que funcione la parte de inteligencia artificial.

---

## 2. Primer arranque: tu perfil

La primera vez, la app te da la **bienvenida** y te pregunta quién eres:

- **🎓 Estudiante:** activa el **modo aprendizaje**, con cajitas azules "💡 Modo aprendizaje" que te explican cada paso. Ideal para practicar sin miedo a equivocarte.
- **🏢 Empresa / Emprendedor:** experiencia directa, sin explicaciones extra.

Puedes **cambiar tu perfil** cuando quieras con el botón **👤 (tu nombre)**, arriba a la derecha, y prender o apagar el modo aprendizaje.

---

## 3. Crea tu empresa

Todo en Trikles Conta gira alrededor de una **empresa** (tu negocio, o una empresa de práctica si eres estudiante).

1. Entra a la pestaña **Empresas**.
2. Botón **+ Nueva empresa**.
3. Escribe el **nombre**, elige el **régimen fiscal** (RESICO, Actividad Empresarial, etc.) y, si quieres, el **RFC**.
4. Guarda.

Al crearla, se carga **automáticamente un catálogo de cuentas base del SAT**. 🎉

> 💡 Puedes tener **varias empresas**, cada una con su contabilidad independiente. Cambia entre ellas con el selector **"Empresa:"** de arriba.

---

## 4. Catálogo de cuentas

Es la lista de "cajones" donde se clasifica el dinero (Activo, Pasivo, Capital, Ingresos, Gastos).

- Pestaña **Catálogo**. Ahí ves tus cuentas agrupadas.
- Puedes **agregar**, **editar** o **eliminar** cuentas.
- Si borraste algo por error, usa **Restaurar base SAT** (vuelve a poner las cuentas base que falten, sin borrar las tuyas).

No necesitas ser experto: el catálogo base ya trae lo más común (Caja, Bancos, Ventas, IVA, Gasolina, Renta, etc.).

---

## 5. ⭐ Capturar una operación (lo mejor)

Aquí es donde la app brilla.

1. Ve a la pestaña **Capturar (IA)**.
2. En **"¿Qué operación quieres registrar?"**, escribe en lenguaje normal. Ejemplos:
   - *Pagué $500 de gasolina en efectivo*
   - *Vendí boletos por $1,200 y me pagaron en efectivo, más IVA*
   - *Compré papelería por $348 con tarjeta*
3. Ajusta la **fecha** si hace falta.
4. Pulsa **✨ Proponer asiento con IA**.
5. En unos segundos, la IA propone el **asiento** (los cargos y abonos).

### Revisar, editar y guardar
- **Revisa** que las cuentas y montos sean correctos. Puedes cambiar cualquier **cuenta**, **tipo** (Cargo/Abono) o **monto**, agregar o quitar líneas, y editar el **concepto**.
- Abajo verás los **totales** y el semáforo: **✓ Cuadra** (verde) o **✗ Descuadre** (rojo).
- Cuando esté correcto, pulsa **Guardar asiento**.

> 🛡️ **La app no te deja cometer errores graves.** Si algo está mal, aparece un aviso:
> - **⛔ (rojo):** bloquea el guardado y te explica qué corregir (por ejemplo: "No cuadra: cargos ≠ abonos", "elige la cuenta de la línea 2", "falta al menos un abono").
> - **⚠️ (ámbar):** es una recomendación (por ejemplo, fecha futura o sin concepto), pero sí te deja guardar.

> ✍️ ¿Prefieres armarlo tú mismo? Usa el botón **Crear manualmente**.

---

## 6. Los libros y estados (se generan solos)

Una vez que capturas asientos, **no tienes que hacer nada más**: estas pestañas se llenan automáticamente.

- **Libro Diario:** lista de todos tus asientos por fecha, con folios. Incluye una **verificación de integridad** que marca en rojo cualquier problema. Puedes **eliminar** un asiento si te equivocaste.
- **Libro Mayor:** los movimientos y el **saldo de cada cuenta**.
- **Balanza de comprobación:** el resumen que **demuestra que todo cuadra** (sumas y saldos iguales).
- **Estados financieros:**
  - **Estado de Resultados:** Ingresos − Gastos = Utilidad o Pérdida.
  - **Estado de Situación Financiera (Balance General):** Activo = Pasivo + Capital. La app comprueba que cuadre.

---

## 7. 💰 Simulación de impuestos

Pestaña **Impuestos**. La app **estima** tus impuestos con tus propios datos:

- **IVA:** el que cobraste menos el que pagaste → te dice si sale **a cargo (a pagar)** o **a favor**.
- **ISR:** sobre tus ingresos (RESICO) o sobre tu utilidad, según tu régimen.

Las **tasas son configurables** (puedes cambiar el % de IVA e ISR). Botones rápidos: **RESICO**, **Actividad Empresarial**, **Persona Moral**.

> ⚠️ Son **estimaciones**. El ISR real suele ser progresivo (por tablas del SAT). Confírmalo siempre con tu contador.

---

## 8. 🔔 Alertas fiscales

Pestaña **Alertas fiscales**. Un calendario que te dice **qué días te toca declarar o pagar**.

- **Próximos vencimientos** con semáforo: 🔴 urgente (≤3 días), 🟡 pronto (≤10), 🟢 con tiempo.
- Marca **"Mi empresa tiene empleados"** para activar automáticamente IMSS / INFONAVIT / retenciones.
- Todo es **configurable**: activa/desactiva obligaciones, cambia entidad, periodicidad y día límite, o agrega las tuyas.
- Si algo vence en **15 días o menos**, aparece una **🔔 barra de alerta** en la parte de arriba de la app, estés donde estés.

> ⚠️ Las fechas son de apoyo y cambian con la ley. Confírmalas con tu contador y el SAT.

---

## 9. Exportar (Excel y PDF)

Pestaña **Exportar**:

- **📊 Descargar Excel:** un archivo `.xlsx` con 4 hojas (Diario, Balanza, Estado de Resultados, Balance General).
- **📄 Generar PDF:** abre una vista lista para imprimir. En el diálogo de impresión elige **"Guardar como PDF"**.

> Si el PDF no abre, tu navegador quizá bloqueó la ventana emergente. Permite las ventanas emergentes para este archivo.

---

## 10. Preguntas frecuentes / problemas

**La IA no responde o marca error 403**
→ Es un tema del servidor (Apps Script). Suele significar que falta autorizar permisos o poner la llave. Revisa el botón **⚙ Configuración** → **Probar conexión** y **Probar IA**.

**"El backend no devolvió una respuesta válida"**
→ Revisa que tengas internet y que la URL en **⚙ Configuración** termine en `/exec`.

**Cambié de computadora y no veo mis datos**
→ Por ahora los datos viven en el navegador de cada equipo. Las cuentas en línea (para verlos desde cualquier lado) son una mejora futura.

**¿Es seguro?**
→ Sí. Tu llave de la inteligencia artificial está **escondida en el servidor**, nunca en la app. Nadie la ve.

---

## 11. En resumen

1. Elige tu perfil (🎓 o 🏢).
2. Crea tu empresa.
3. **Captura operaciones en palabras** → revisa → guarda.
4. Consulta libros, estados, impuestos y alertas (se hacen solos).
5. Exporta a Excel o PDF cuando lo necesites.

**¡Y listo! Contabilidad clara, rápida y sin miedo a equivocarte.** 🙌

---

*Trikles Conta · Herramienta de apoyo. No sustituye a un contador profesional. Las cifras y fechas son estimaciones a confirmar con tu contador y el SAT.*
