from django import forms
from .models import Departement, Poste, EmployePoste, Employe, TermEmploi, TermPaie
# from betterforms.multiform import MultiModelForm

class EmployeForm(forms.ModelForm):
    class Meta():
        model = Employe
        fields = ('prenom','nom','dateNaissance','sexe','adresseDom','ville','pays','responsable')
    
class EmployePosteForm(forms.ModelForm):
    class Meta():
        model = EmployePoste
        fields = ('employe','poste','dateDebut','dateFin')

class TermEmploiForm(forms.ModelForm):
    class Meta():
        model = TermEmploi
        fields = ('employe','type','dateDebut','dateFin','raisonFin')

class TermPaieForm(forms.ModelForm):
    class Meta():
        model = TermPaie
        fields = ('employe','montant','bonus','dateDebut','dateFin','raisonPaie')

# class EmployeTermPostForm(MultiModelForm):
#     form_classes = {
#         'employe_poste':EmployePosteForm,
#         'employe_termEmploi':TermEmploiForm,                
#         'employe_termPaie':TermPaieForm,
#     }