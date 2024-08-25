create table "public"."households" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "address" text not null,
    "user_id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
);


alter table "public"."households" enable row level security;

CREATE UNIQUE INDEX households_pkey ON public.households USING btree (id);

alter table "public"."households" add constraint "households_pkey" PRIMARY KEY using index "households_pkey";

alter table "public"."households" add constraint "public_households_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE not valid;

alter table "public"."households" validate constraint "public_households_user_id_fkey";

grant delete on table "public"."households" to "anon";

grant insert on table "public"."households" to "anon";

grant references on table "public"."households" to "anon";

grant select on table "public"."households" to "anon";

grant trigger on table "public"."households" to "anon";

grant truncate on table "public"."households" to "anon";

grant update on table "public"."households" to "anon";

grant delete on table "public"."households" to "authenticated";

grant insert on table "public"."households" to "authenticated";

grant references on table "public"."households" to "authenticated";

grant select on table "public"."households" to "authenticated";

grant trigger on table "public"."households" to "authenticated";

grant truncate on table "public"."households" to "authenticated";

grant update on table "public"."households" to "authenticated";

grant delete on table "public"."households" to "service_role";

grant insert on table "public"."households" to "service_role";

grant references on table "public"."households" to "service_role";

grant select on table "public"."households" to "service_role";

grant trigger on table "public"."households" to "service_role";

grant truncate on table "public"."households" to "service_role";

grant update on table "public"."households" to "service_role";

create policy "Households are viewable only by authenticated users"
on "public"."households"
as permissive
for select
to authenticated
using (true);


create policy "User can create their own household"
on "public"."households"
as permissive
for insert
to authenticated
with check ((auth.uid() = user_id));


create policy "User can only delete their own household"
on "public"."households"
as permissive
for delete
to authenticated
using ((auth.uid() = user_id));


create policy "User can only update their own household"
on "public"."households"
as permissive
for update
to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));

CREATE TRIGGER on_change_household_updated_at BEFORE UPDATE ON public.households FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');