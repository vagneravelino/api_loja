<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUpdateBrandRequest;
use App\Repositories\Implementation\BrandRepository;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    protected $_repository;

    public function __construct(BrandRepository $repository)
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
        $brands = $this->_repository->getAll();

        return success('Lista de Marcas', 200, $brands);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUpdateBrandRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUpdateBrandRequest $request)
    {
        $brand = $this->_repository->store([
            'name' => $request->name
        ]);

        return success('Marca cadastrada com sucesso!', 201, $brand);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!$brand = $this->_repository->findById($id)) {
            return error('Marca não encontrada!', 200);
        }

        return success('Marca encontrada!', 200, $brand);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\StoreUpdateBrandRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreUpdateBrandRequest $request, $id)
    {
        if (!$brand = $this->_repository->findById($id)) {
            return error('Marca não encontrada!', 200);
        }

        $brand = $this->_repository->update($id, [
            'name' => $request->name
        ]);

        return success('Marca atualizada com sucesso!', 200, $brand);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!$brand = $this->_repository->findById($id)) {
            return error('Marca não encontrada!', 200);
        }

        $brand->destroy($id);

        return success('Marca removida com sucesso!', 200);
    }
}
