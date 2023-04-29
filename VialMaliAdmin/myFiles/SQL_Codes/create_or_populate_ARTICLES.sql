CREATE TABLE articles.classe_dim (
	pk int4 NOT NULL,
	classe varchar NOT NULL,
	info varchar NULL
);
ALTER TABLE articles.classe_dim ADD CONSTRAINT classe_dim_pk PRIMARY KEY (pk);
ALTER TABLE articles.classe_dim ADD indicateurproduitfini boolean NULL;

CREATE TABLE articles.couleur_dim (
	pk int4 NOT NULL,
	couleur varchar NOT NULL,
	CONSTRAINT couleur_dim_pk PRIMARY KEY (pk)
);
ALTER TABLE articles.couleur_dim ADD code varchar NULL;
ALTER TABLE articles.couleur_dim ADD info varchar NULL;

CREATE TABLE articles.dimension_dim (
	pk int4 NOT NULL,
	largeur float4 NULL,
	hauteur float4 NULL,
	profondeur float4 NULL,
	CONSTRAINT dimension_dim_pk PRIMARY KEY (pk)
);

CREATE TABLE articles.article_dim (
	pk int4 NOT NULL,
	reference varchar NULL,
	designation varchar NULL,
	unitedemesure varchar NULL,
	unitedequantification varchar NULL,
	fabriquant varchar NULL,
	info varchar NULL,
	classe_pk int4 NOT NULL,
	couleur_pk int4 NOT NULL,
	dimension_pk int4 NOT NULL,
	CONSTRAINT article_dim_pk PRIMARY KEY (pk),
	CONSTRAINT article_dim_fk FOREIGN KEY (classe_pk) REFERENCES articles.classe_dim(pk) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT article_dim_fk_1 FOREIGN KEY (couleur_pk) REFERENCES articles.couleur_dim(pk) ON DELETE RESTRICT ON UPDATE RESTRICT,
	CONSTRAINT article_dim_fk_2 FOREIGN KEY (dimension_pk) REFERENCES articles.dimension_dim(pk) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE articles.nomenclature_ref_dim (
	qtitemateriel float4 NOT NULL,
	produitfini_pk int4 NOT NULL,
	materiel_pk int4 NOT NULL,
	CONSTRAINT nomenclature_ref_dim_fk FOREIGN KEY (produitfini_pk) REFERENCES articles.article_dim(pk) ON DELETE RESTRICT ON UPDATE RESTRICT,
	CONSTRAINT nomenclature_ref_dim_fk_1 FOREIGN KEY (materiel_pk) REFERENCES articles.article_dim(pk) ON DELETE RESTRICT ON UPDATE RESTRICT
);

