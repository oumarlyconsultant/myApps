from django.forms import ModelForm
from .models import Pays, Ville, Client, Devis, DevisArticle, Classe, Couleur, Dimension, Article, Nomenclature, Departement, Poste, Employe, TermesEmploi

class ClientForm(ModelForm):
    class Meta:
        model = Client
        fields = '__all__'

class EmployeForm(ModelForm):
    class Meta:
        model = Employe
        fields = "__all__"