from django.db import models
from django.utils import timezone
from django.urls import reverse

# Create the post model
class Employe(models.Model):
    administrateur = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    prenom = models.CharField(max_length=50)
    nom = models.CharField(max_length=50)
    dateNaissance = models.DateField(blank=False,null=False)
    sexe = models.CharField(max_length=1,blank=False,null=False,choices=(('H','HOMME'),('F','FEMME')))
    adresseDom = models.CharField(max_length=100,blank=True,null=True)
    ville = models.CharField(max_length=50,blank=True,null=True,default='Bamako')
    pays = models.CharField(max_length=50,blank=True,null=True,default='Mali')
    dateEmbauche = models.DateField(blank=True,null=True)
    dateAjout = models.DateTimeField(default=timezone.now())

    def get_absolute_url(self): #go back to this post
        return reverse("employe_detail",kwargs={'pk':self.pk})

    def __str__(self):
        return (self.prenom+" "+self.nom)