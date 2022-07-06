<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUpdateSupplierRequest;
use App\Repositories\Implementation\SupplierRepository;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    protected $_repository;

    public function __construct(SupplierRepository $repository)
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
        $suppliers = $this->_repository->getAll();

        return success('Lista de Fornecedores', 200, $suppliers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUpdateSupplierRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUpdateSupplierRequest $request)
    {
        $supplier = $this->_repository->store([
            'name' => $request->name
        ]);

        return success('Fornecedor cadastrado com sucesso!', 201, $supplier);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!$supplier = $this->_repository->findById($id)) {
            return error('Fornecedor não encontrado!', 200);
        }

        return success('Fornecedor encontrado!', 200, $supplier);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\StoreUpdateSupplierRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreUpdateSupplierRequest $request, $id)
    {
        if (!$supplier = $this->_repository->findById($id)) {
            return error('Fornecedor não encontrado!', 200);
        }

        $supplier = $this->_repository->update($id, [
            'name' => $request->name
        ]);

        return success('Fornecedor atualizado com sucesso!', 200, $supplier);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!$supplier = $this->_repository->findById($id)) {
            return error('Fornecedor não encontrado!', 200);
        }

        $supplier = $this->_repository->destroy($id);

        return success('Fornecedor removido com sucesso!', 200, $supplier);
    }
}
