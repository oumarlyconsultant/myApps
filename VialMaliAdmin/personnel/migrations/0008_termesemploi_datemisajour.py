# Generated by Django 4.1.7 on 2023-04-08 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("personnel", "0007_remove_termesemploi_id_termesemploi_employe_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="termesemploi",
            name="dateMisAJour",
            field=models.DateTimeField(
                auto_now=True, verbose_name="Date de mis-a-jour"
            ),
        ),
    ]
