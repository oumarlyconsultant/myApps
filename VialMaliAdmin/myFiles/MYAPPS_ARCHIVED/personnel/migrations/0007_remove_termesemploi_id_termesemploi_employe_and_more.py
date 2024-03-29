# Generated by Django 4.1.7 on 2023-04-08 22:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("personnel", "0006_termesemploi_remove_employe_bonus_and_more"),
    ]

    operations = [
        migrations.RemoveField(model_name="termesemploi", name="id",),
        migrations.AddField(
            model_name="termesemploi",
            name="employe",
            field=models.OneToOneField(
                default=999,
                on_delete=django.db.models.deletion.CASCADE,
                primary_key=True,
                serialize=False,
                to="personnel.employe",
            ),
        ),
        migrations.AlterField(
            model_name="termesemploi",
            name="raisonFinEmploi",
            field=models.CharField(
                choices=[
                    ("R", "Retraite"),
                    ("V", "Fin volontaire"),
                    ("I", "Fin involontaire"),
                    ("C", "Fin contrat"),
                    ("n/a", "non-applicable"),
                ],
                default="n/a",
                max_length=3,
            ),
        ),
    ]
