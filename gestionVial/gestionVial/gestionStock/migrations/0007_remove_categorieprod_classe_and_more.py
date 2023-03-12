# Generated by Django 4.1.7 on 2023-03-12 01:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("gestionStock", "0006_fournisseur_pays"),
    ]

    operations = [
        migrations.RemoveField(model_name="categorieprod", name="classe",),
        migrations.RemoveField(model_name="nomenclature", name="materiel",),
        migrations.RemoveField(model_name="nomenclature", name="produit",),
        migrations.RemoveField(model_name="materiel", name="categorieMat",),
        migrations.RemoveField(model_name="materiel", name="uniteDeMesure",),
        migrations.RemoveField(model_name="produit", name="characteristiques",),
        migrations.RemoveField(model_name="produit", name="materiel",),
        migrations.RemoveField(model_name="produit", name="uniteDeMesure",),
        migrations.AddField(
            model_name="materiel",
            name="classe",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="gestionStock.classemat",
            ),
        ),
        migrations.AddField(
            model_name="produit",
            name="classe",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="gestionStock.classeprod",
            ),
        ),
        migrations.AlterField(
            model_name="materiel",
            name="uniteDeQuantification",
            field=models.CharField(
                choices=[
                    ("u", "unite"),
                    ("m", "metre lineaire"),
                    ("m2", "metre carre"),
                    ("m3", "metre cube"),
                    ("n/a", "pas applicable"),
                ],
                default="m",
                max_length=50,
            ),
        ),
        migrations.AlterField(
            model_name="produit",
            name="uniteDeQuantification",
            field=models.CharField(
                choices=[
                    ("u", "unite"),
                    ("m", "metre lineaire"),
                    ("m2", "metre carre"),
                    ("m3", "metre cube"),
                    ("n/a", "pas applicable"),
                ],
                default="u",
                max_length=50,
            ),
        ),
        migrations.DeleteModel(name="CategorieMat",),
        migrations.DeleteModel(name="CategorieProd",),
        migrations.DeleteModel(name="Nomenclature",),
    ]
