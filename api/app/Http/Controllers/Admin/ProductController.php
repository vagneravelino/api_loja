<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUpdateProductRequest;
use App\Repositories\Implementation\ProductRepository;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    protected $_repository;

    public function __construct(ProductRepository $repository)
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
        $products = $this->_repository
            ->relationships('brand', 'supplier')
            ->getAll();

        return success('Lista de Produtos', 200, $products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUpdateProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUpdateProductRequest $request)
    {
        $product = $this->_repository->store([
            'name' => $request->name,
            'description' => $request->description,
            'brand_id' => $request->brand_id,
            'supplier_id' => $request->supplier_id,
            'features' => $request->features,
            'price' => $request->price
        ]);

        return success('Produto cadastrado com sucesso!', 201, $product);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!$product = $this->_repository->findById($id)) {
            return error('Produto não encontrado!', 200);
        }

        return success('Produto encontrado!', 200, $product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\StoreUpdateProductRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreUpdateProductRequest $request, $id)
    {
        if (!$product = $this->_repository->findById($id)) {
            return error('Produto não encontrado!', 200);
        }

        $produto = $this->_repository->update($id, [
            'name' => $request->name,
            'description' => $request->description,
            'brand_id' => $request->brand_id,
            'supplier_id' => $request->supplier_id,
            'features' => $request->features,
            'price' => $request->price
        ]);

        return success('Produto atualizado com sucesso!', 200, $product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!$product = $this->_repository->findById($id)) {
            return error('Produto não encontrado!', 200);
        }

        $produtct = $this->_repository->destroy($id);

        return success('Produto removido com sucesso!', 200, $product);
    }
}
