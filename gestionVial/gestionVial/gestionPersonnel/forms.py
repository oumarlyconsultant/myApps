from django import forms
from .models import Departement, Poste, EmployePoste, Employe, TermEmploi, TermPaie
from betterforms.multiform import MultiModelForm
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit

class EmployeForm(forms.ModelForm):
    class Meta():
        model = Employe
        fields = ('prenom','nom','dateNaissance','sexe','adresseDom','ville','pays','responsable')
    
        #adding widgets to customize form (add CSS styling)
        # widgets ={
        #     'title':forms.TextInput(attrs={'class':'textinputclass'}), #our own class
        #     'text':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'})
        # }
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

class NouvelEmployeForm(MultiModelForm):
    form_classes = {
        'employe':EmployeForm,
        'employe_termEmploi':TermEmploiForm,        
        'employe_poste':EmployePosteForm,
        'employe_termPaie':TermPaieForm,
    }
    