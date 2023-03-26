CREATE TABLE approvisionnements.fournisseur_dim (
	pk int4 NOT NULL,
	nom varchar NOT NULL,
	adresse varchar NULL,
	email varchar NULL,
	telephone varchar NULL,
	personnerelation varchar NULL,
	indicateurfabriquant boolean NULL,
	CONSTRAINT fournisseur_dim_pk PRIMARY KEY (pk),
	CONSTRAINT fournisseur_dim_fk FOREIGN KEY (pk) REFERENCES communs.ville_dim(pk) ON DELETE RESTRICT ON UPDATE RESTRICT,
	CONSTRAINT fournisseur_dim_fk_1 FOREIGN KEY (pk) REFERENCES communs.pays_dim(pk) ON DELETE RESTRICT ON UPDATE RESTRICT
);
ALTER TABLE approvisionnements.fournisseur_dim ADD ville_pk int4 NOT NULL;
ALTER TABLE approvisionnements.fournisseur_dim ADD pays_pk int4 NOT NULL;
ALTER TABLE approvisionnements.fournisseur_dim DROP CONSTRAINT fournisseur_dim_fk;
ALTER TABLE approvisionnements.fournisseur_dim DROP CONSTRAINT fournisseur_dim_fk_1;
ALTER TABLE approvisionnements.fournisseur_dim ADD CONSTRAINT fournisseur_dim_fk FOREIGN KEY (ville_pk) REFERENCES communs.ville_dim(pk) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE approvisionnements.fournisseur_dim ADD CONSTRAINT fournisseur_dim_fk_1 FOREIGN KEY (pays_pk) REFERENCES communs.pays_dim(pk) ON DELETE RESTRICT ON UPDATE RESTRICT;
