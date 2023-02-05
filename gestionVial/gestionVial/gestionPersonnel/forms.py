from django import forms
from blog.models import Employe

class EmployeForm(forms.ModelForm):
    class Meta():
        model = Employe
        fields = ('prenom','nom','dateNaissance','sexe','adressDom','ville','pays')
    
        #adding widgets to customize form (add CSS styling)
        # widgets ={
        #     'title':forms.TextInput(attrs={'class':'textinputclass'}), #our own class
        #     'text':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'})
        # }