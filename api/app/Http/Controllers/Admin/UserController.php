<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUpdateUserRequest;
use App\Repositories\Implementation\UserRepository;

class UserController extends Controller
{
    protected $_repository;

    public function __construct(UserRepository $repository)
    {
        $this->_repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = $this->_repository->orderBy('name')->paginate()->getAll();

        return success('Lista de usuários', 200, $users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUpdateUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUpdateUserRequest $request)
    {
        $user = $this->_repository->store([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return success('Usuário cadastrado com sucesso!', 201, $user);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!$user = $this->_repository->findById($id)) {
            return error('Usuário não encontrado!', 200);
        }

        return success('Usuário encontrado!', 200, $user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\StoreUpdateUserRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreUpdateUserRequest $request, $id)
    {
        if (!$user = $this->_repository->findById($id)) {
            return error('Usuário não encontrado!', 200);
        }

        $user = $this->_repository->update($id, [
            'name' => $request->name,
            'email' => $request->email
        ]);

        return success('Usuário atualizado com sucesso!', 200, $user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!$user = $this->_repository->findById($id)) {
            return error('Usuário não encontrado!', 200);
        }

        $user->destroy($id);

        return success('Usuário removido com sucesso!', 200);
    }
}
