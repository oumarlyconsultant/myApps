from django.contrib import admin
from .models import Proprietaire, Terrain, DateDim, trancheHoraire, Calendrier, Disponibilite, Client, Reservation

# Register your models here.
admin.site.register(Proprietaire)
admin.site.register(Terrain)
admin.site.register(DateDim)
admin.site.register(trancheHoraire)
admin.site.register(Calendrier)
admin.site.register(Disponibilite)
admin.site.register(Client)
admin.site.register(Reservation)