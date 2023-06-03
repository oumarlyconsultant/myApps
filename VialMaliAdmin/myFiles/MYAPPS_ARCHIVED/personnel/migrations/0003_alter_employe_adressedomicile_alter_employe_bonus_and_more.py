# Generated by Django 4.1.7 on 2023-04-02 17:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("acceuil", "0005_pays_ville_delete_pays_dim_delete_ville_dim"),
        ("personnel", "0002_poste_employe_bonus_employe_dateembauche_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="employe",
            name="adresseDomicile",
            field=models.CharField(default=" ", max_length=100),
        ),
        migrations.AlterField(
            model_name="employe", name="bonus", field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name="employe",
            name="dateNaissance",
            field=models.DateField(default="1991-01-01"),
        ),
        migrations.AlterField(
            model_name="employe",
            name="pays",
            field=models.ForeignKey(
                default=127,
                on_delete=django.db.models.deletion.RESTRICT,
                to="acceuil.pays",
            ),
        ),
        migrations.AlterField(
            model_name="employe",
            name="raisonFinEmploi",
            field=models.CharField(
                choices=[
                    ("R", "retraite"),
                    ("V", "Fin volontaire"),
                    ("I", "Fin involontaire"),
                    ("C", "Fin contrat"),
                    ("A", "Autre raison"),
                    ("n/a", "non-applicable"),
                ],
                default="N/A",
                max_length=3,
            ),
        ),
        migrations.AlterField(
            model_name="employe",
            name="responsable",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.RESTRICT,
                to="personnel.employe",
            ),
        ),
        migrations.AlterField(
            model_name="employe",
            name="ville",
            field=models.ForeignKey(
                default=22187,
                on_delete=django.db.models.deletion.RESTRICT,
                to="acceuil.ville",
            ),
        ),
    ]