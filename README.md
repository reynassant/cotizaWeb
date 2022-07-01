# Cotizaweb

Crea una web que compruebe el valor del Bitcoin respecto al Euro. (BTC/EUR) cada 15 segundos.

La web debe indicar si la cotización ha variado desde la última consulta, y si es así por cuanto, diferenciando claramente si está estable, al alza o la baja. Por otro lado no es necesario que inviertas tiempo en el CSS para que tenga un buen aspecto.

Tampoco es necesario que que tenga backend ni siquiera servidor web, si decides implementarlo de dicha forma la elección de stack es totalmente libre.

Como es probable que transcribir toda la solución sea poco productivo asegurate de dejar anotado como minimo estas partes:

- El repo donde se puede encontrar la solución. Asegúrate de que sea público y recuerda que suele mucho mejor tener varios commits pequeños que todo de golpe
- La forma en que obtienes los datos del origen
- Como parseas dichos datos y extraes la información relevante.
- Como se muestra la cotización en el frontend
- Como realizas la tarea de forema periódica


Puedes basarte en el ejercicio análogo que implementamos en python ```https://github.com/elMestreAcademy/exchange_mon```. Te recomiendo el endpoint público ```https://api.coinbase.com/v2/exchange-rates?currency=BTC```, también puedes utilizar como base el repo ```https://github.com/elMestreAcademy/cotizaWeb``` pero esto es son tan solo sugerencias.
