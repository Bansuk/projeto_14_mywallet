--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Ubuntu 13.4-0ubuntu0.21.04.1)
-- Dumped by pg_dump version 13.4 (Ubuntu 13.4-0ubuntu0.21.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account (
    account_id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.account OWNER TO postgres;

--
-- Name: account_account_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.account_account_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_account_id_seq OWNER TO postgres;

--
-- Name: account_account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.account_account_id_seq OWNED BY public.account.account_id;


--
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    session_id integer NOT NULL,
    token text NOT NULL,
    account_id integer
);


ALTER TABLE public.session OWNER TO postgres;

--
-- Name: session_session_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.session_session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.session_session_id_seq OWNER TO postgres;

--
-- Name: session_session_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.session_session_id_seq OWNED BY public.session.session_id;


--
-- Name: transaction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transaction (
    transaction_id integer NOT NULL,
    date date NOT NULL,
    description text NOT NULL,
    value numeric(12,2) NOT NULL,
    account_id integer
);


ALTER TABLE public.transaction OWNER TO postgres;

--
-- Name: transaction_transaction_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transaction_transaction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transaction_transaction_id_seq OWNER TO postgres;

--
-- Name: transaction_transaction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transaction_transaction_id_seq OWNED BY public.transaction.transaction_id;


--
-- Name: account account_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account ALTER COLUMN account_id SET DEFAULT nextval('public.account_account_id_seq'::regclass);


--
-- Name: session session_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session ALTER COLUMN session_id SET DEFAULT nextval('public.session_session_id_seq'::regclass);


--
-- Name: transaction transaction_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction ALTER COLUMN transaction_id SET DEFAULT nextval('public.transaction_transaction_id_seq'::regclass);


--
-- Data for Name: account; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.account (account_id, name, email, password) FROM stdin;
8	Ana	email@email.com	$2b$10$/2HgUA5ztr54wzAMfEHMRexDUpPqNQt0uVOmAeTPC9mARSkE3PywO
9	teste	teste@teste.com	$2b$10$xFDw/yrkoujb3MfvaD0mcemLN9xwx6hc0sgnu/6yxb1vn2VnBE7tu
10	fulano	fulano@teste.com	$2b$10$D1saQMG37vYWr4UW5a.xMeNchJDz3peuLoPKnHIBcgT5afFdi0AYK
11	Ciclano	cilano@teste.com	$2b$10$fZCqEcssLbMmoBt5Q2y19eNoaLWQ5h..iSxbzHfZfE.UrLbP604wC
12	Beltrano	beltrano@teste.com	$2b$10$1AIWazA9emgwrIHfoha0vu.BODWF6KfTrkitlAodIojTrNPUexOsW
13	Ana	ana@ana.com	$2b$10$LbXFrU2tQAjRELaejc5HgucdqWGkPhBP3YlrkNpQiOQjI1YLTDjBq
\.


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.session (session_id, token, account_id) FROM stdin;
2	5d650e1f-254a-474c-82aa-1167f43f27d0	\N
3	a6a4a722-1039-4624-b95d-b3624d523116	\N
4	f66679f3-e646-4aa4-9c68-8434da2e69ed	8
5	205eb50a-e25c-4685-903c-0450e7c9f32b	8
6	53e78ad6-653e-44d9-a1fb-17678df1cffc	8
7	5fa1c3d4-5c6e-46b9-a42d-a2e6a1b05dd6	8
8	157d745e-9afb-430f-ba5b-1e8f40005ad4	8
9	c279e960-6d40-4f00-974d-b5381d961b85	8
10	71adbf87-a013-4885-b3fb-0e59ac91e2a8	8
11	17ef3b52-17c4-45d1-ae20-a74e8c708916	8
12	1638d446-531e-4f93-abc8-4ee380af91a6	8
13	35ea964d-8f34-49fd-8c41-3b69d410cab6	12
14	8ab07cc7-1777-4195-9315-96763c9b9ed1	10
15	3bbc6bf8-1c9b-4272-95c1-5c9456ee6e2e	10
16	00d2034d-d013-4948-b60d-60be8244e0cb	10
17	70d69f0d-4a71-4398-bdda-00c2b6b190bb	10
18	8ec79e11-b0ee-44b3-aa98-66cac4bb2c76	10
19	69521f00-d6d8-4738-96a0-ab2ca4975cdb	10
20	d4ae2d2f-ccdc-4415-a007-c10950a15e58	10
21	da25a245-b537-416a-84f3-775f4f8cd657	10
22	fdd53326-c513-4067-affd-57fe7c671fb7	10
23	e1f54954-2178-4cc9-8928-fdc86267fd74	10
24	0cc925ad-c28d-4900-aa65-260351b66c17	10
25	15dcc6fe-54ac-4d94-bb26-f6f7656ea545	10
26	51fbea6e-6310-477e-bc52-b9266bd36e68	8
27	eabcdcc6-1f81-4315-978e-4fd339c8a2e4	8
28	bc0e1b3f-dfa8-408e-98a6-a25fcd30d0e2	10
29	d7c8558f-09e7-4e40-84f6-f425157cbcdf	10
30	ecf88b46-fb11-4ef5-91db-11acd9018edc	10
34	80de3a45-801f-4921-b86c-20ef1f5c6e1a	8
35	d6e4131c-0d29-4648-9c55-5a0765b5ad7b	10
36	f3d7bac9-c8d1-47d9-bb6c-bc1212ae1760	8
37	03e7109e-197b-47f9-9ab1-8050eda2a2ee	8
38	3bad8c5e-b219-4f6a-a89c-7a215d21e9b5	8
39	b0117bc6-422a-49f9-9154-d03a4213e796	8
40	6cd2715e-7899-4df8-ab2e-7871299c7042	8
41	755ab2ea-2c5b-4699-89f4-a951040fe5ca	8
42	084f3226-24c0-4eb4-9932-3cfe7103dee5	8
43	e41ee60e-58e1-4e9b-96bd-1e50c9e21263	8
44	2a3f38c5-f195-46d3-8a22-b950687779f8	8
45	b888a655-665b-43fd-8578-f9df2c78bd0c	8
46	4ec04d54-b511-4770-bb71-60d77d82d6a0	8
47	d49f1037-1483-4e5d-828a-29fc770c046c	8
48	67fc7870-acbd-4491-a306-bf66dcce5eb4	8
49	ba37401b-c541-4a60-8a42-c6b108b1050c	8
50	93958ddd-d0f4-4f0e-97ca-146ed352ce3a	8
51	060ccfb0-ab03-4bc6-8a1d-e0ba5067dec8	8
52	fd836d08-5dfb-4eac-88d0-9adbe3706dd2	8
53	d209fc6d-6fbd-448d-92a0-4d3b21cbdbdf	8
54	586b2ac2-2ae4-4010-806f-5b81ea1c187d	8
55	5b79c240-9ca9-4642-8193-1e6b3b9bdd76	8
56	d53fe32a-8f4b-4a91-85a7-13359643d5a9	8
57	6ad9d668-c7d4-4699-9d7e-ce9459c53ecd	8
58	7c602a7b-ec72-47b7-bd1f-f4b81b097592	8
59	13eaf004-3a2d-441a-9c79-b597543c126e	8
60	2a9bb03c-0cc8-458c-8474-b637f077761d	8
61	9279fb14-0c99-4bfb-9d78-1f8e52fc5656	8
62	a45806e0-4a18-45ac-b082-1bdd6f87368b	8
63	5338740f-9e77-4529-a2da-2d182114eb6d	8
64	7b849a62-bc1c-4d20-932e-7fe4674167f8	8
66	e3137405-4ca0-4593-b9d8-ad9c2f2861bb	10
67	cba00365-769e-4f8a-9615-e1574b76091e	10
68	b4952c9c-3ea3-4ccd-b010-a03274a2290e	10
69	7eaf0b08-e915-4248-a97d-e0d5942fe050	10
72	08b96fc2-ba5c-4fe2-9b83-ff44c6391997	8
73	8a94be17-887b-4da4-b41b-ab0f7fc30497	10
74	f7224cf5-061a-48d2-8a27-2b763ad3c0e9	10
75	02ace942-74ee-46a9-b735-238533785688	8
76	b4322c19-98ad-479a-ac32-4d7145e6d7fc	8
77	67154ac0-d45c-4d85-ab11-4c1bc93bf16d	8
78	7c7fdfa1-b99c-472b-a636-14ee8317e2b1	8
79	afb813e9-8dff-4b34-a543-9ff44029d4cc	8
80	87bf37b6-293c-4995-a10e-043babd1610a	8
81	b209bb99-91ad-4a5f-b511-355c1f6fd84c	10
82	58e60f88-7d2c-409e-a886-13d65a6c9470	10
83	bb2f638f-386b-4a7c-96c6-d69fdfd59bae	8
84	5e3f8343-9fb8-44a1-bed9-17cba28bd599	8
85	c12cc853-3467-4f92-904c-2a9fc7cb41f2	8
86	61a1cc1c-8313-47ef-b9cb-7b9544dc931a	8
87	8c47a846-a8a3-4b8c-9baa-4b1a8b02670a	8
88	517fe230-b86f-4b01-bf76-5e98f38a22f9	8
89	352f659a-3dfe-41a4-8cb6-7effbb635768	8
90	1eeeb4ac-14e1-4896-89a4-5e778ea12ab8	10
91	68755067-8f2b-4263-aa30-825ae568f4b3	8
92	f14d6d5b-1638-4098-ac26-892e86c1cc19	8
93	aad4b215-b347-44a2-aaf4-99af523e46ec	8
94	eb78342d-26d7-4ea0-b39b-ef314d68a0d6	8
96	87e63f4d-cf08-4dc4-8a6e-ec8fd0d7ba30	8
97	4faab423-fde7-4460-8dc7-669cec06ef97	8
98	e4f1b92f-e4b0-4715-a6e4-913c5f794919	8
99	1f72e3ce-c971-4a72-bca6-b729eec0e9d1	8
100	7adb6f16-1022-45f3-ba20-551f5d957ca6	8
101	b2c82b2c-5e1f-4bbb-bb78-d9aab541973b	8
102	42ff05a9-0739-42d9-a26a-2fcf46d3df01	8
104	7a86ba03-5a21-42a8-8405-fcfda673b622	10
106	18c932d8-4241-4f96-b26f-d9092c86e2c1	13
108	5342a426-e9be-448c-b575-98019a8b2c7c	13
\.


--
-- Data for Name: transaction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transaction (transaction_id, date, description, value, account_id) FROM stdin;
19	2021-10-24	aaa	100.00	8
20	2021-10-24	aaa	100.00	8
21	2021-10-24	aaa	-100.00	8
22	2021-10-25	teste	-200.00	8
23	2021-10-25	test	1000.00	8
24	2021-10-25	Festa	50.00	8
25	2021-10-25	aaa	100.00	8
26	2021-10-25	aassa	100.00	8
27	2021-10-25	a	10.00	8
28	2021-10-25	teste	100.00	10
29	2021-10-25	dasfdf	100.00	10
30	2021-10-25	a	100.00	10
31	2021-10-25	te	100.00	10
32	2021-10-25	as	10.00	10
33	2021-10-25	2	1.00	10
34	2021-10-25	2	2.00	10
35	2021-10-25	2	2.00	10
36	2021-10-25	asdasd	-100.00	10
37	2021-10-25	Lanche	-50.00	13
38	2021-10-25	Salario	1000.00	13
39	2021-10-25	iPhone	-3000.00	13
\.


--
-- Name: account_account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.account_account_id_seq', 13, true);


--
-- Name: session_session_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.session_session_id_seq', 108, true);


--
-- Name: transaction_transaction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transaction_transaction_id_seq', 39, true);


--
-- Name: account account_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT account_pkey PRIMARY KEY (account_id);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (session_id);


--
-- Name: transaction transaction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (transaction_id);


--
-- Name: session session_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(account_id);


--
-- Name: transaction transaction_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(account_id);


--
-- PostgreSQL database dump complete
--
