from django.apps import AppConfig


class AcceuilConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "acceuil"

class GestionPersonnelConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "gestionPersonnel"