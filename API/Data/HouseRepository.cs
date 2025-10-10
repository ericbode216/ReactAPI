using Microsoft.EntityFrameworkCore;


public interface IHouseRepository
{
    Task<List<HouseDto>> GetAll();
    Task<HouseDetailDto?> Get(int id);
}

public class HouseRepository : IHouseRepository
{
    private readonly HouseDbContext context;
    public HouseRepository(HouseDbContext context)
    {
        this.context = context;
    }

    public async Task<List<HouseDto>> GetAll()
    {
        return await context.Houses.Select(h => new HouseDto(h.Id, h.Address, h.Country, h.Price)).ToListAsync();
    }

    public async Task<HouseDetailDto?> Get(int id)
    {
        var entity = await context.Houses.SingleOrDefaultAsync(
            h => h.Id == id);
        if (entity == null)
            return null;
        else
            return new HouseDetailDto(entity.Id, entity.Address, entity.Country, entity.Price, entity.Description, entity.Photo);

    }
}