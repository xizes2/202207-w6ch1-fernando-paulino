APP
-Receives: none
-Shows: User interface
-State: none
-User Action: none

HEADER
-Receives: none
-Shows: title
-State: none
-User Action: none

TASK LIST
-Receives props : none
-Receives por context: tasks array
-Shows: tasks
-State: none
-User Action: none

TASK
-Receives props : task
-Receives por context:
-Shows: marker, task text and delete button
-State: none
-User Action: mark as done, delete

BUTTON
-Receives: action
-Shows: minus sign
-State: none
-User action: click

<!-- FORMULARIO
-Receives por props: title, la url de la imagen, likes de la imagen
-Receives por provider: objeto al que editar
-Shows: formulario con textboxes y boton para submitear
-State: crear/editar
-User Action: rellenar campos del formulario -->

MODEL (Data Layer)
-id: number
-name: string
-done: boolean
