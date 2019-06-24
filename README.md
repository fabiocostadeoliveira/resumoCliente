Projeto criado com a ferramenta [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponiveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.<br>
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.


### `npm test`
Executa o executor de testes no modo interativo<br>

### `npm run build`

Faz o build da aplicação na pasta `build`.

### `start.sh`(Ambiente linux)
O script é uma junção do `npm start` com o `json-server --watch.`<br>
Esse comando ira iniciar a aplicação com o Mock de dados na porta 3004.<br>
Para mudança da porta do `json-server`, editar o script que esta na raiz <br>
do projeto.<br>

### Ambiente Windows
Executar os seguintes comandos:
* npm start
* json-server --watch ./database/db.json --port 3004


## Bibliotecas/Frameworks utilizados

* React
* Bootstrap
* JQuery
* Icons FontAwesome
* [google-maps-react](https://www.npmjs.com/package/google-maps-react)
* [react-minimal-pie-chart](https://www.npmjs.com/package/react-minimal-pie-chart)


## Componentes criados no projeto

* BadgeDetail
* IconLabelDetail
* LabelDetail
* ProfileBoard
* AddressMaps
* OpportunityClient
* LimitCredit
* FinancialSecurities
* SalesChart
* Activities

## Orientações para uso dos componentes

#### Propriedade `typeColor`
> Componentes que contiverem a propriedade `typeColor`, deve ser utilizado o sistema de cores do bootstrap, ou seja, passar como parametro: <b>primary, secoundary, warning, danger ou success.</b> 


* #### BadgeDetail:
> Obs: Propriedade `subtitle` é opcional.

```
<BadgeDetail 
   title={data.label}
   subtitle={data.subtitle}
   value={data.value}
   typeColor={"success"}/>
```
<br>

* #### IconLabelDetail:
> Obs: Propriedade `containerStyle` é opcional. Seu objetivo é sobrescrever o estilo nativo da `div` que envolve o componente.

```
<IconLabelDetail 
	title={data.title} 
	subtitle={data.description}
	containerStyle={'mb-1 mt-1 ml-3'} 
    icon={{icon:"nome-icone-fontawesome" }}/>
```


<br>

* #### LabelDetail:

```
<LabelDetail 
	title={data.title}
    subtitle={data.subtitle}
    typeColor={"success"}/>
```

<br>

* #### ProfileBoard:

```
<ProfileBoard 
    nameClient={data.nameClient}
    nameCompany={data.nameCompany}
    status={data.status}
    phone={data.phone}
    email={data.email}
    typePhone={data.typeEmail}
    typeEmail={data.typeEmail}/>
```

<br>

* #### AddressMaps:
> Obs: O objeto `center` é a referencia da centralizacao do mapa.

```
let address = {
	nameStreet:"Av.Brasil",
    addressNumber:"711",
    typeAddress:"Casa"
    }

let center = {
    lat:latitude, lng :longitude
    }

<AddressMaps 
   data={address} 
   center={center}/>    
```

<br>

* #### OpportunityClient:

```
let listOpportunity = [
      {
        "title": "Descartadas",
        "subtitle": "-",
        "value": "0",
        "status": "discarded"
      },
      {
        "title": "Ganhas",
        "subtitle": "20.000,00",
        "value": "4",
        "status": "won"
      },
      {
        "title": "Perdidas",
        "subtitle": "4.000,00",
        "value": "1",
        "status":"lost"
      },
      {
        "title": "Abertas",
        "subtitle": "Diversos",
        "value": "4",
        "status": "opened"
      }
      ]
      
<OpportunityClient 
	data={listOpportunity}/>
      
```

<br>

* #### LimitCredit:

```
 let limitCredit = {
     "limitGranted": {
         "value": "123456.00",
         "description": "Limite Concedido",
     },
       "limitAvailable": {
       "value": "30000.00",
       "description": "Limite Disponivel",
     }
 }
 <LimitCredit {...limitCredit}/>
      
```


<br>

* #### FinancialSecurities:

```
let listFinancialSecurities = [
    {
        "total": "3105.00",
        "quantity": 1,
        "status":"expired"
    },
    {
        "total": "2000.00",
        "quantity": 2,
        "status":"toexpire"
    },
    {
        "total": "30000.00",
        "quantity": 3,
        "status":"paid"
    }
]

<FinancialSecurities 
   data={listFinancialSecurities} />
```

<br>

* #### SalesChart:
> Obs: Esse grafico ira mostrar somente tres niveis, ou seja, irá mostrar
> a quantidade dos dois maiores produtos na integra e irá agrupar os outro produtos com o label do grafico`outros`.

```
"totalSales": [
    {
        "product": "Prod01",
        "totalSale": 10000
    },
    {
        "product": "Prod02",
        "totalSale": 50000
    },
    {
        "product": "Prod03",
        "totalSale": 10000
    },
    {
        "product": "Prod04",
        "totalSale": 10000
    },
    {
        "product": "Prod04",
        "totalSale": 10000
    }
],

<SalesChart 
    data={listTotalSales}/>
```

<br>

* #### Activities:
> A propriedade `typeActivity` define qual icone o componente ira renderizar. Atualmente os types aceitos sao:
* meeting    (icon handshake)
* coffee     (icon coffee)
* scheduling (icon calendar)
* email      (icon envelope)
* phonecall  (icon phone)
    
```
let listActivities = [
    {
        "title": "Reuniao",
        "description": "Reuniao com gestores",
        "status": "late",
        "typeActivity": "meeting"
    },
    {
        "title": "Contato Clientes",
        "description": "Clientes do projeto",
        "status": "progress",
        "typeActivity": "phonecall"
    },
    {
        "title": "Café com coordenadores",
        "description": "Coordenação do projeto Xy",
        "status": "completed",
        "typeActivity": "coffee"
    },
    {
        "title": "Ligação Juridico",
        "description": "Revisar contrato de compra",
        "status": "planned",
        "typeActivity": "scheduling"
    }
    
]            

<Activities 
    data={listActivities}/>
    
```

