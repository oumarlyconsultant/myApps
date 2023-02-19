from django.contrib import admin
from .models import CharacMat,Couleur,Fournisseur,Materiel,CharacProd,Dimension,Produit,Nomenclature

# Register your models here.
admin.site.register(CharacMat)
admin.site.register(Couleur)
admin.site.register(Fournisseur)
admin.site.register(Materiel)
admin.site.register(CharacProd)
admin.site.register(Dimension)
admin.site.register(Produit)
admin.site.register(Nomenclature)