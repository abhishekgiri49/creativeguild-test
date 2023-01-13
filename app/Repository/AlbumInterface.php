<?php
namespace App\Repository;

interface AlbumInterface
{
    /**
     * Get  Album by id
     *
     * @param int
     */
    public function getAlbumById($id);
    /**
     * Get all Album  by it's ID
     *
     * @param int
     */

    /**
     * Get's all Album.
     *
     * @return mixed
     */
    public function getAll();

    /**
     * create a Album
     *
     * @return mixed
     */
    public function create(array $data);
    /**
     * Updates a Album.
     *
     * @param int
     * @param array
     */

    public function update( $id,array $data);

    /**
     * Deletes a Album.
     *
     * @param int
     */
    public function delete($id);
}