## CASH-IN

- Permitir que os clientes processem transações.

## CASH-OUT

- Efetuar o pagamento dos recebíveis aos clientes.

## Processar uma transação

- Criar uma transação.

## Retornar uma lista das transações criadas

- É isso. Mas é retornar todas as transações ou só as do cliente?.

## Sobre o cartão

- Armazenar e retornar somente os últimos 4 dígitos do cartão.

## Sobre os payables

**Débito**

- Status paid.
- Dia do pagamento tem que ser o dia da criação da transação + 0.

**Crédito**

- Status waiting_funds.
- Dia do pagamento tem que ser o dia da criação da transação + 30.

## Taxas 

- Fee para débito -- 3%.
- Fee para crédito -- 5%.

## Saldo

- Disponibilizar através de consulta o saldo do cliente.
- Available é tudo o que o cliente já recebeu que é o paid.
- Waiting_funds é tudo o que o cliente ainda vai receber que é o waiting_funds.