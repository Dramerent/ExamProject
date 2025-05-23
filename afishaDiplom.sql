PGDMP  .                    }            afishaDiplom    17.2    17.2 O    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    17628    afishaDiplom    DATABASE     �   CREATE DATABASE "afishaDiplom" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "afishaDiplom";
                     postgres    false            �            1259    17755    Comments    TABLE     �   CREATE TABLE public."Comments" (
    comment_id integer NOT NULL,
    user_id integer NOT NULL,
    comment_text text NOT NULL,
    organizer_id integer NOT NULL,
    "comment_isVerified" boolean,
    comment_name text NOT NULL,
    post_id integer
);
    DROP TABLE public."Comments";
       public         heap r       postgres    false            �            1259    17754    Comments_comment_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Comments_comment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."Comments_comment_id_seq";
       public               postgres    false    228            �           0    0    Comments_comment_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."Comments_comment_id_seq" OWNED BY public."Comments".comment_id;
          public               postgres    false    227            �            1259    17724    CreatedPosts    TABLE     �  CREATE TABLE public."CreatedPosts" (
    post_image text NOT NULL,
    post_description text NOT NULL,
    post_cost integer NOT NULL,
    "post_meetingPlace" text NOT NULL,
    "post_allSeats" numeric NOT NULL,
    "post_buydSeats" numeric NOT NULL,
    post_checked boolean,
    organizer_id integer NOT NULL,
    post_id integer NOT NULL,
    genre_id integer NOT NULL,
    post_name text NOT NULL,
    "post_meetDate" date NOT NULL,
    "post_fullDescription" text NOT NULL
);
 "   DROP TABLE public."CreatedPosts";
       public         heap r       postgres    false            �            1259    17733    CreatedPosts_post_id_seq    SEQUENCE     �   CREATE SEQUENCE public."CreatedPosts_post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."CreatedPosts_post_id_seq";
       public               postgres    false    225            �           0    0    CreatedPosts_post_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."CreatedPosts_post_id_seq" OWNED BY public."CreatedPosts".post_id;
          public               postgres    false    226            �            1259    17712    Genres    TABLE     �   CREATE TABLE public."Genres" (
    genre_id integer DEFAULT nextval('public."CreatedPosts_post_id_seq"'::regclass) NOT NULL,
    genre_name text NOT NULL,
    genre_description text NOT NULL,
    sphere_id integer NOT NULL
);
    DROP TABLE public."Genres";
       public         heap r       postgres    false    226            �            1259    17634 
   Organizers    TABLE     �  CREATE TABLE public."Organizers" (
    organizer_description text NOT NULL,
    organizer_verified boolean,
    "organizer_phoneNum" text NOT NULL,
    organizer_id integer NOT NULL,
    sphere_id integer NOT NULL,
    organizer_nickname text NOT NULL,
    user_id integer NOT NULL,
    organizer_photo text DEFAULT ''::text NOT NULL,
    callback_id integer NOT NULL,
    "organizer_reasonToCancel" text
);
     DROP TABLE public."Organizers";
       public         heap r       postgres    false            �            1259    17855    ReasonsToRefund    TABLE     �   CREATE TABLE public."ReasonsToRefund" (
    reason_id integer DEFAULT nextval('public."CreatedPosts_post_id_seq"'::regclass) NOT NULL,
    reason_name text NOT NULL,
    reason_description text NOT NULL
);
 %   DROP TABLE public."ReasonsToRefund";
       public         heap r       postgres    false    226            �            1259    17660    Roles    TABLE     [   CREATE TABLE public."Roles" (
    role_name text NOT NULL,
    role_id integer NOT NULL
);
    DROP TABLE public."Roles";
       public         heap r       postgres    false            �            1259    17677    Roles_role_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Roles_role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Roles_role_id_seq";
       public               postgres    false    219            �           0    0    Roles_role_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Roles_role_id_seq" OWNED BY public."Roles".role_id;
          public               postgres    false    221            �            1259    17700    Sphere    TABLE     �   CREATE TABLE public."Sphere" (
    sphere_id integer DEFAULT nextval('public."CreatedPosts_post_id_seq"'::regclass) NOT NULL,
    sphere_name text NOT NULL
);
    DROP TABLE public."Sphere";
       public         heap r       postgres    false    226            �            1259    17830    TicketRefund    TABLE     e  CREATE TABLE public."TicketRefund" (
    "ticketRefund_id" integer DEFAULT nextval('public."CreatedPosts_post_id_seq"'::regclass) NOT NULL,
    "ticketRefind_description" text,
    ticket_id integer NOT NULL,
    "ticketRefind_isConfirm" boolean,
    reason_id integer NOT NULL,
    user_id integer NOT NULL,
    "ticketRefund_quantity" numeric NOT NULL
);
 "   DROP TABLE public."TicketRefund";
       public         heap r       postgres    false    226            �            1259    17774    Tickets    TABLE     $  CREATE TABLE public."Tickets" (
    ticket_id integer NOT NULL,
    user_id integer NOT NULL,
    post_id integer DEFAULT 0,
    ticket_quantity integer DEFAULT 0 NOT NULL,
    ticket_name text NOT NULL,
    ticket_genre text NOT NULL,
    ticket_sphere text NOT NULL,
    "ticket_meetPlace" text NOT NULL,
    ticket_cost integer DEFAULT 0 NOT NULL,
    ticket_date date NOT NULL,
    "ticket_isHere" boolean DEFAULT false NOT NULL,
    "ticket_isRefind" boolean DEFAULT false NOT NULL,
    organizer_id integer,
    ticket_image text NOT NULL
);
    DROP TABLE public."Tickets";
       public         heap r       postgres    false            �            1259    17773    Tickets_ticket_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Tickets_ticket_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."Tickets_ticket_id_seq";
       public               postgres    false    230            �           0    0    Tickets_ticket_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."Tickets_ticket_id_seq" OWNED BY public."Tickets".ticket_id;
          public               postgres    false    229            �            1259    17647    Users    TABLE       CREATE TABLE public."Users" (
    user_name text NOT NULL,
    user_surname text NOT NULL,
    user_mail text NOT NULL,
    user_password text NOT NULL,
    user_photo text NOT NULL,
    role_id integer DEFAULT 3 NOT NULL,
    user_id integer NOT NULL,
    "user_likedMass" integer[]
);
    DROP TABLE public."Users";
       public         heap r       postgres    false            �            1259    17668    Users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Users_user_id_seq";
       public               postgres    false    218            �           0    0    Users_user_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Users_user_id_seq" OWNED BY public."Users".user_id;
          public               postgres    false    220            �            1259    17901 	   callbacks    TABLE     e   CREATE TABLE public.callbacks (
    callback_id integer NOT NULL,
    callback_name text NOT NULL
);
    DROP TABLE public.callbacks;
       public         heap r       postgres    false            �            1259    17900    callbacks_callback_id_seq    SEQUENCE     �   CREATE SEQUENCE public.callbacks_callback_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.callbacks_callback_id_seq;
       public               postgres    false    234            �           0    0    callbacks_callback_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.callbacks_callback_id_seq OWNED BY public.callbacks.callback_id;
          public               postgres    false    233            �            1259    17686    organizers_organizer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.organizers_organizer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.organizers_organizer_id_seq;
       public               postgres    false    217            �           0    0    organizers_organizer_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.organizers_organizer_id_seq OWNED BY public."Organizers".organizer_id;
          public               postgres    false    222            �           2604    26310    Comments comment_id    DEFAULT     ~   ALTER TABLE ONLY public."Comments" ALTER COLUMN comment_id SET DEFAULT nextval('public."Comments_comment_id_seq"'::regclass);
 D   ALTER TABLE public."Comments" ALTER COLUMN comment_id DROP DEFAULT;
       public               postgres    false    228    227    228            �           2604    26311    CreatedPosts post_id    DEFAULT     �   ALTER TABLE ONLY public."CreatedPosts" ALTER COLUMN post_id SET DEFAULT nextval('public."CreatedPosts_post_id_seq"'::regclass);
 E   ALTER TABLE public."CreatedPosts" ALTER COLUMN post_id DROP DEFAULT;
       public               postgres    false    226    225            �           2604    26312    Organizers organizer_id    DEFAULT     �   ALTER TABLE ONLY public."Organizers" ALTER COLUMN organizer_id SET DEFAULT nextval('public.organizers_organizer_id_seq'::regclass);
 H   ALTER TABLE public."Organizers" ALTER COLUMN organizer_id DROP DEFAULT;
       public               postgres    false    222    217            �           2604    26313    Roles role_id    DEFAULT     r   ALTER TABLE ONLY public."Roles" ALTER COLUMN role_id SET DEFAULT nextval('public."Roles_role_id_seq"'::regclass);
 >   ALTER TABLE public."Roles" ALTER COLUMN role_id DROP DEFAULT;
       public               postgres    false    221    219            �           2604    26314    Tickets ticket_id    DEFAULT     z   ALTER TABLE ONLY public."Tickets" ALTER COLUMN ticket_id SET DEFAULT nextval('public."Tickets_ticket_id_seq"'::regclass);
 B   ALTER TABLE public."Tickets" ALTER COLUMN ticket_id DROP DEFAULT;
       public               postgres    false    229    230    230            �           2604    26315    Users user_id    DEFAULT     r   ALTER TABLE ONLY public."Users" ALTER COLUMN user_id SET DEFAULT nextval('public."Users_user_id_seq"'::regclass);
 >   ALTER TABLE public."Users" ALTER COLUMN user_id DROP DEFAULT;
       public               postgres    false    220    218            �           2604    26316    callbacks callback_id    DEFAULT     ~   ALTER TABLE ONLY public.callbacks ALTER COLUMN callback_id SET DEFAULT nextval('public.callbacks_callback_id_seq'::regclass);
 D   ALTER TABLE public.callbacks ALTER COLUMN callback_id DROP DEFAULT;
       public               postgres    false    233    234    234            �          0    17755    Comments 
   TABLE DATA           �   COPY public."Comments" (comment_id, user_id, comment_text, organizer_id, "comment_isVerified", comment_name, post_id) FROM stdin;
    public               postgres    false    228   i       �          0    17724    CreatedPosts 
   TABLE DATA           �   COPY public."CreatedPosts" (post_image, post_description, post_cost, "post_meetingPlace", "post_allSeats", "post_buydSeats", post_checked, organizer_id, post_id, genre_id, post_name, "post_meetDate", "post_fullDescription") FROM stdin;
    public               postgres    false    225   #i       �          0    17712    Genres 
   TABLE DATA           V   COPY public."Genres" (genre_id, genre_name, genre_description, sphere_id) FROM stdin;
    public               postgres    false    224   �i       {          0    17634 
   Organizers 
   TABLE DATA           �   COPY public."Organizers" (organizer_description, organizer_verified, "organizer_phoneNum", organizer_id, sphere_id, organizer_nickname, user_id, organizer_photo, callback_id, "organizer_reasonToCancel") FROM stdin;
    public               postgres    false    217   ej       �          0    17855    ReasonsToRefund 
   TABLE DATA           W   COPY public."ReasonsToRefund" (reason_id, reason_name, reason_description) FROM stdin;
    public               postgres    false    232   k       }          0    17660    Roles 
   TABLE DATA           5   COPY public."Roles" (role_name, role_id) FROM stdin;
    public               postgres    false    219   nk       �          0    17700    Sphere 
   TABLE DATA           :   COPY public."Sphere" (sphere_id, sphere_name) FROM stdin;
    public               postgres    false    223   �k       �          0    17830    TicketRefund 
   TABLE DATA           �   COPY public."TicketRefund" ("ticketRefund_id", "ticketRefind_description", ticket_id, "ticketRefind_isConfirm", reason_id, user_id, "ticketRefund_quantity") FROM stdin;
    public               postgres    false    231   �k       �          0    17774    Tickets 
   TABLE DATA           �   COPY public."Tickets" (ticket_id, user_id, post_id, ticket_quantity, ticket_name, ticket_genre, ticket_sphere, "ticket_meetPlace", ticket_cost, ticket_date, "ticket_isHere", "ticket_isRefind", organizer_id, ticket_image) FROM stdin;
    public               postgres    false    230   Nl       |          0    17647    Users 
   TABLE DATA           �   COPY public."Users" (user_name, user_surname, user_mail, user_password, user_photo, role_id, user_id, "user_likedMass") FROM stdin;
    public               postgres    false    218   �l       �          0    17901 	   callbacks 
   TABLE DATA           ?   COPY public.callbacks (callback_id, callback_name) FROM stdin;
    public               postgres    false    234   �m       �           0    0    Comments_comment_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."Comments_comment_id_seq"', 7, true);
          public               postgres    false    227            �           0    0    CreatedPosts_post_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."CreatedPosts_post_id_seq"', 66, true);
          public               postgres    false    226            �           0    0    Roles_role_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Roles_role_id_seq"', 3, true);
          public               postgres    false    221            �           0    0    Tickets_ticket_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."Tickets_ticket_id_seq"', 79, true);
          public               postgres    false    229            �           0    0    Users_user_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Users_user_id_seq"', 29, true);
          public               postgres    false    220            �           0    0    callbacks_callback_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.callbacks_callback_id_seq', 4, true);
          public               postgres    false    233            �           0    0    organizers_organizer_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.organizers_organizer_id_seq', 16, true);
          public               postgres    false    222            �           2606    17762    Comments Comments_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_pkey" PRIMARY KEY (comment_id);
 D   ALTER TABLE ONLY public."Comments" DROP CONSTRAINT "Comments_pkey";
       public                 postgres    false    228            �           2606    17741    CreatedPosts CreatedPosts_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public."CreatedPosts"
    ADD CONSTRAINT "CreatedPosts_pkey" PRIMARY KEY (post_id);
 L   ALTER TABLE ONLY public."CreatedPosts" DROP CONSTRAINT "CreatedPosts_pkey";
       public                 postgres    false    225            �           2606    17718    Genres Genres_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Genres"
    ADD CONSTRAINT "Genres_pkey" PRIMARY KEY (genre_id);
 @   ALTER TABLE ONLY public."Genres" DROP CONSTRAINT "Genres_pkey";
       public                 postgres    false    224            �           2606    17861 $   ReasonsToRefund ReasonsToRefund_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public."ReasonsToRefund"
    ADD CONSTRAINT "ReasonsToRefund_pkey" PRIMARY KEY (reason_id);
 R   ALTER TABLE ONLY public."ReasonsToRefund" DROP CONSTRAINT "ReasonsToRefund_pkey";
       public                 postgres    false    232            �           2606    17685    Roles Roles_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (role_id);
 >   ALTER TABLE ONLY public."Roles" DROP CONSTRAINT "Roles_pkey";
       public                 postgres    false    219            �           2606    17706    Sphere Sphere_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public."Sphere"
    ADD CONSTRAINT "Sphere_pkey" PRIMARY KEY (sphere_id);
 @   ALTER TABLE ONLY public."Sphere" DROP CONSTRAINT "Sphere_pkey";
       public                 postgres    false    223            �           2606    17868    TicketRefund TicketRefund_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public."TicketRefund"
    ADD CONSTRAINT "TicketRefund_pkey" PRIMARY KEY ("ticketRefund_id");
 L   ALTER TABLE ONLY public."TicketRefund" DROP CONSTRAINT "TicketRefund_pkey";
       public                 postgres    false    231            �           2606    17814    Tickets Tickets_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public."Tickets"
    ADD CONSTRAINT "Tickets_pkey" PRIMARY KEY (ticket_id);
 B   ALTER TABLE ONLY public."Tickets" DROP CONSTRAINT "Tickets_pkey";
       public                 postgres    false    230            �           2606    17676    Users Users_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (user_id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public                 postgres    false    218            �           2606    17908    callbacks callbacks_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.callbacks
    ADD CONSTRAINT callbacks_pkey PRIMARY KEY (callback_id);
 B   ALTER TABLE ONLY public.callbacks DROP CONSTRAINT callbacks_pkey;
       public                 postgres    false    234            �           2606    17694    Organizers organizers_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."Organizers"
    ADD CONSTRAINT organizers_pkey PRIMARY KEY (organizer_id);
 F   ALTER TABLE ONLY public."Organizers" DROP CONSTRAINT organizers_pkey;
       public                 postgres    false    217            �           2606    18105 #   Comments Comments_organizer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_organizer_id_fkey" FOREIGN KEY (organizer_id) REFERENCES public."Organizers"(organizer_id) NOT VALID;
 Q   ALTER TABLE ONLY public."Comments" DROP CONSTRAINT "Comments_organizer_id_fkey";
       public               postgres    false    217    228    4807            �           2606    26303    Comments Comments_post_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_post_id_fkey" FOREIGN KEY (post_id) REFERENCES public."CreatedPosts"(post_id) ON DELETE SET NULL NOT VALID;
 L   ALTER TABLE ONLY public."Comments" DROP CONSTRAINT "Comments_post_id_fkey";
       public               postgres    false    4817    225    228            �           2606    17763    Comments Comments_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(user_id);
 L   ALTER TABLE ONLY public."Comments" DROP CONSTRAINT "Comments_user_id_fkey";
       public               postgres    false    228    218    4809            �           2606    17749 '   CreatedPosts CreatedPosts_genre_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CreatedPosts"
    ADD CONSTRAINT "CreatedPosts_genre_id_fkey" FOREIGN KEY (genre_id) REFERENCES public."Genres"(genre_id) NOT VALID;
 U   ALTER TABLE ONLY public."CreatedPosts" DROP CONSTRAINT "CreatedPosts_genre_id_fkey";
       public               postgres    false    4815    224    225            �           2606    17744 +   CreatedPosts CreatedPosts_organizer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CreatedPosts"
    ADD CONSTRAINT "CreatedPosts_organizer_id_fkey" FOREIGN KEY (organizer_id) REFERENCES public."Organizers"(organizer_id) NOT VALID;
 Y   ALTER TABLE ONLY public."CreatedPosts" DROP CONSTRAINT "CreatedPosts_organizer_id_fkey";
       public               postgres    false    4807    217    225            �           2606    17719    Genres Genres_sphere_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Genres"
    ADD CONSTRAINT "Genres_sphere_id_fkey" FOREIGN KEY (sphere_id) REFERENCES public."Sphere"(sphere_id);
 J   ALTER TABLE ONLY public."Genres" DROP CONSTRAINT "Genres_sphere_id_fkey";
       public               postgres    false    223    4813    224            �           2606    17922 &   Organizers Organizers_callback_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Organizers"
    ADD CONSTRAINT "Organizers_callback_id_fkey" FOREIGN KEY (callback_id) REFERENCES public.callbacks(callback_id) NOT VALID;
 T   ALTER TABLE ONLY public."Organizers" DROP CONSTRAINT "Organizers_callback_id_fkey";
       public               postgres    false    4827    234    217            �           2606    17707 $   Organizers Organizers_sphere_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Organizers"
    ADD CONSTRAINT "Organizers_sphere_id_fkey" FOREIGN KEY (sphere_id) REFERENCES public."Sphere"(sphere_id) NOT VALID;
 R   ALTER TABLE ONLY public."Organizers" DROP CONSTRAINT "Organizers_sphere_id_fkey";
       public               postgres    false    223    217    4813            �           2606    17894 "   Organizers Organizers_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Organizers"
    ADD CONSTRAINT "Organizers_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(user_id) NOT VALID;
 P   ALTER TABLE ONLY public."Organizers" DROP CONSTRAINT "Organizers_user_id_fkey";
       public               postgres    false    218    217    4809            �           2606    17862 (   TicketRefund TicketRefund_reason_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TicketRefund"
    ADD CONSTRAINT "TicketRefund_reason_id_fkey" FOREIGN KEY (reason_id) REFERENCES public."ReasonsToRefund"(reason_id) NOT VALID;
 V   ALTER TABLE ONLY public."TicketRefund" DROP CONSTRAINT "TicketRefund_reason_id_fkey";
       public               postgres    false    231    232    4825            �           2606    17876 (   TicketRefund TicketRefund_ticket_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TicketRefund"
    ADD CONSTRAINT "TicketRefund_ticket_id_fkey" FOREIGN KEY (ticket_id) REFERENCES public."Tickets"(ticket_id) ON DELETE SET NULL NOT VALID;
 V   ALTER TABLE ONLY public."TicketRefund" DROP CONSTRAINT "TicketRefund_ticket_id_fkey";
       public               postgres    false    4821    230    231            �           2606    17871 &   TicketRefund TicketRefund_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TicketRefund"
    ADD CONSTRAINT "TicketRefund_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(user_id) NOT VALID;
 T   ALTER TABLE ONLY public."TicketRefund" DROP CONSTRAINT "TicketRefund_user_id_fkey";
       public               postgres    false    4809    231    218            �           2606    17821    Tickets Tickets_post_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Tickets"
    ADD CONSTRAINT "Tickets_post_id_fkey" FOREIGN KEY (post_id) REFERENCES public."CreatedPosts"(post_id) ON DELETE SET NULL NOT VALID;
 J   ALTER TABLE ONLY public."Tickets" DROP CONSTRAINT "Tickets_post_id_fkey";
       public               postgres    false    225    230    4817            �           2606    17780    Tickets Tickets_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Tickets"
    ADD CONSTRAINT "Tickets_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(user_id);
 J   ALTER TABLE ONLY public."Tickets" DROP CONSTRAINT "Tickets_user_id_fkey";
       public               postgres    false    230    218    4809            �      x������ � �      �   �   x�UNA
�0<���"1�F��?Dh��������z+���G]�T����fvf榛S���]�7�Y�LR�����\t�kθ�L�,����L��;����D��n� ��g`�����^H�A�D	=p`�Zt�w$+L�!������8V#�n �^�u��D���(��&%kӏ�+�!Qi�$?DT�b      �   ]   x�3��pa߅]�E���
)��E�%��y��\F��\�z���9sSKs���H
�9/캰���/� �7p&�$g&�)����� �.a      {   �   x���}aӅ���@�V �/lP������p>��,!9K8-,M��L���͍8�89�2;�*�@UBiN#K�҂��Ĕ☘���ļ̪Ԣ������CssscsssK���`����������q���������^VA:Њ?�=... �#eQ      �   P   x�3估��֋�]�$w\��taǅ�
6^쾰��>���"@5���>�5(pq^�r��b��@][Q8\1z\\\ �W�      }   &   x�+-N-�4��/JO�ˬ���Sr3�8�b���� ��	      �      x�3�0�¼s/,�0���b���� ��
�      �   k   x�U��	�@D�sw���L.�a :'��.�˘BuF�QO�GU�H:�إǁ��`ќ�6�$^���ƊGZ}��U�h&�&P娡�rGے>.�:����넙_��8�      �   �   x�%�?
�0����Sx��4iLs�(�"J�����"��Rp��^od��wy���$-���h����	��{8��C���+^8�'��=���Rsay�hI�Sڅ�/�s���l[V�R��L���YV���_�(!x&�ȓu��Kc?߽@�      |   �   x�%�K
�@ ���x���lg%B�A&-FG�wt�]$��a�QB�����������w���)�|`�hO<c��ɱ�UTrP1R� �!�C�˴2�m���W�fX��n0z�/����}8��Д\��E�e5����nYԜ5����EL14dh��i:ѐ�e
( ��M���(?��?�      �   0   x�3�,I�IM/J��2�,��2�,�LJ-�2�,�H,)N,(������ ��q     