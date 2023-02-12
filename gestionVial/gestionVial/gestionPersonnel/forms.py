from django import forms
from .models import Departement, Poste, EmployePoste, Employe, TermEmploi, TermPaie

class EmployeForm(forms.ModelForm):
    class Meta():
        model = Employe
        fields = ('prenom','nom','dateNaissance','sexe','adresseDom','ville','pays','responsable')
    
        #adding widgets to customize form (add CSS styling)
        # widgets ={
        #     'title':forms.TextInput(attrs={'class':'textinputclass'}), #our own class
        #     'text':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'})
        # }

class TermEmploiForm(forms.ModelForm):
    class Meta():
        model = TermEmploi
        fields = ('employe','type','dateDebut','dateFin','raisonFin')

class TermPaieForm(forms.ModelForm):
    class Meta():
        model = TermPaie
        fields = ('employe','montant','bonus','dateDebut','dateFin','raisonPaie')
