# COW Todo Server

Coin On Web 학회 Todo 사이트용 Server

## 사용법

### Docker를 이용한 DB Server 생성 및 실행

```bash
# setup은 1번 실행 후 이후엔 실행 안해도 됨
./infra/setup.sh
./infra/mysql.sh
```

## 필요한 Node Package 다운로드

```bash
npm install
```

## 서버 실행

```bash
npm run start
```

## Host

http://localhost:5000

## API

<details>
<summary>GET /todo - 전체 Todo 정보 가져오기</summary>

---

모든 Todo 정보를 가져옵니다.

- **URL**

  /todo

- **Method:**

  `GET`

- **Success Response:**

  ```
  HTTP/1.1 200 OK

  [
    {
      "id": 1,
      "content": "test1",
      "isCompleted": false,
      "createdAt": "2022-07-26T00:14:52.449Z",
      "updatedAt": "2022-07-26T00:15:20.000Z"
    },
    {} // 위와 유사한 데이터가 여러 개 반환
  ]
  ```

  </details>

<details>
<summary>POST /todo - Todo 정보 추가하기</summary>

---

Todo 정보를 추가합니다.

- **URL**

  /todo

- **Method:**

  `POST`

- **Request Body**
  ```json
  {
    "content" : "새로운 Todo" // 새로운 Todo 내용을 넣어줍니다.
  }
  ```

- **Success Response:**
  ```
  HTTP/1.1 201 Created
  ```
  </details>

<details>
<summary>PATCH /todo/{id} - 특정 id의 todo 수정하기</summary>

---

특정 id값을 가진 Todo 정보를 수정합니다.

- **URL**

  /todo/{id}

- **Method:**

  `PATCH`

- **Request Body**
  ```json
  {
    "content" : "새로운 Todo(수정)" // 수정 될 Todo 내용을 넣어줍니다.
  }
  ```
  
- **Success Response:**
  ```
  HTTP/1.1 200 OK
  ```
  </details>

<details>
<summary>DELETE /todo/{id} - 특정 id의 todo 삭제하기</summary>

---

특정 id값을 가진 Todo 정보를 삭제합니다..

- **URL**

  /todo/{id}

- **Method:**

  `DELETE`

- **Success Response:**
  ```
  HTTP/1.1 200 OK
  ```
  </details>

<details>
<summary>PATCH /todo/status/{id} - 특정 id의 todo 완료 여부 수정하기</summary>

---

특정 id값을 가진 Todo의 완료 여부를 수정합니다.

- **URL**

  /todo/status/{id}

- **Method:**

  `PATCH`

- **Success Response:**

  ```
  HTTP/1.1 200 OK

  true or false
  ```

  </details>
