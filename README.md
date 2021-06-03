#  Recuperação de Senha

**RF** (Requisitos Funcionais)
- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções com recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF** (Requisitos Não Funcionais)
- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails devem acontecer em segundo plano (background job);

**RN** (Regras de Negócio)
- O link enviado por e-mail para resetar senha, deve expirar em duas horas;
- O usuário precisa confirmar a nova senha (digitar a nova senha duas vezes) ao resetar sua senha;


# Atualização do Perfil

**RF**
- O usuário deve poder atualizar seu nome, e-mail e senha;

**RNF**

**RN**
- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar sua senha o usuário precisa confirmar a nova senha;

# Painel do Prestador
**RF**
- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**
- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**
- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de Serviços
**RF**
- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**
- A listagem de prestadores deve ser armazenada em cache;

**RN**
- Cada agendamento deve durar 1hr extamente;
- Os agendamentos devem estar disponíveis entre 8hrs as 18hrs (Primeiro as 8h, último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;